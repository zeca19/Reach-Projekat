'reach 0.1';

const [isFingers, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(5);
const [isGuess, PARAN, NEPARAN] = makeEnum(2);
const [isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(2);

// game logic
const winner = (fingersA, guessB) => {

  if (((fingersA + 1) % 2 == guessB)) {
    const myoutcome = B_WINS;
    return myoutcome;// player A wins
  }
  else {
    if (((fingersA + 1) % 2 != guessB)) {
      const myoutcome = A_WINS;
      return myoutcome;// player B wins
    }


  }

};

assert(winner(ONE, PARAN) == A_WINS);
assert(winner(ONE, NEPARAN) == B_WINS);



assert(winner(TWO, PARAN) == B_WINS);
assert(winner(TWO, NEPARAN) == A_WINS);




assert(winner(THREE, PARAN) == A_WINS);
assert(winner(THREE, NEPARAN) == B_WINS);



assert(winner(FOUR, PARAN) == B_WINS);
assert(winner(FOUR, NEPARAN) == A_WINS);


assert(winner(FIVE, PARAN) == A_WINS);
assert(winner(FIVE, NEPARAN) == B_WINS);


forall(UInt, fingersA =>
  forall(UInt, guessB =>
    assert(isOutcome(winner(fingersA, guessB)))));




const Player =
{
  ...hasRandom,
  getFingers: Fun([], UInt),
  getGuess: Fun([UInt], UInt),
  // seeWinning: Fun([UInt], Null),                KOMENTARISAO
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null)
};
// added a wager function for Alice      
const Alice =
{
  ...Player,
  wager: UInt,
  ...hasConsoleLogger
};
// added a acceptWager function for Bob
const Bob =
{
  ...Player,
  acceptWager: Fun([UInt], Null),
  ...hasConsoleLogger
};
const DEADLINE = 30;

export const main =
  Reach.App(
    {},
    [Participant('Alice', Alice), Participant('Bob', Bob)],
    (A, B) => {
      const informTimeout = () => {
        each([A, B], () => {
          interact.informTimeout();
        });
      };
      A.only(() => {
        const wager = declassify(interact.wager);
      });
      A.publish(wager)
        .pay(wager);
      commit();

      B.only(() => {
        interact.acceptWager(wager);
      });
      B.pay(wager)
        .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));



      var outcome = DRAW;
      invariant(balance() == 2 * wager && isOutcome(outcome));
      // loop until we have a winner
      while (outcome == DRAW) {
        commit();
        A.only(() => {
          const _fingersA = interact.getFingers();
          //const _guessA = interact.getGuess(_fingersA);             KOMENTARISAO
          // interact.log(_fingersA); 
          // interact.log(_guessA);                                                                 
          // We need Alice to be able to publish her fingers and guess,
          // but also keep it secret.  makeCommitment does this.   

          const [_commitA, _saltA] = makeCommitment(interact, _fingersA);
          const commitA = declassify(_commitA);
          // const [_guessCommitA, _guessSaltA] = makeCommitment(interact, _guessA);          KOMENTARISAO
          // const guessCommitA = declassify(_guessCommitA);                                  //KOMENTARISAO    
        });

        A.publish(commitA)
          .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
        commit();

        // A.publish(guessCommitA)
        // .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));            OVA 3 sam JA KOMENTARISAO
        //;
        commit();
        // Bob does not know the values for Alice, but Alice does know the values
        unknowable(B, A(_fingersA, _saltA));
        //  unknowable(B, A(_guessA, _guessSaltA));                                           KOMENTARISAO


        B.only(() => {

          //          const _fingersB = interact.getFingers();          KOMENTARISAO
          //    interact.log(_fingersB);                               s
          const _guessB = interact.getGuess(_fingersB);         // OVO ME INTERESUJE KAKO DA RESIM, mora frontend
          //    interact.log(_guessB);
          //   const fingersB = declassify(_fingersB);
          const guessB = declassify(_guessB);

        });

        // B.publish(fingersB)                                                                    KOMENTARISAO
        // .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));                     KOMENTARISAO
        commit();
        B.publish(guessB)
          .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
        ;

        commit();
        // Alice will declassify the secret information
        A.only(() => {
          const [saltA, fingersA] = declassify([_saltA, _fingersA]);
          //  const [guessSaltA, guessA] = declassify([_guessSaltA, _guessA]);      KOMENTARISAO

        });
        A.publish(saltA, fingersA)
          .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
        // check that the published values match the original values.
        checkCommitment(commitA, saltA, fingersA);
        commit();

        //A.publish(guessSaltA, guessA)
        ///.timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));             KOMENTARISAO
        ///checkCommitment(guessCommitA, guessSaltA, guessA);

        commit();
        /*
                A.only(() => {
                  const WinningNumber = fingersA + fingersB;
                  interact.seeWinning(WinningNumber);
                });                                                                               KOMENTARISAO
        
                A.publish(WinningNumber)
                  .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
                  */
        outcome = winner(fingersA, guessB);
        continue;

      }

      assert(outcome == A_WINS || outcome == B_WINS);
      // send winnings to winner
      transfer(2 * wager).to(outcome == A_WINS ? A : B);
      commit();
      each([A, B], () => {
        interact.seeOutcome(outcome);
      })
      exit();
    });


