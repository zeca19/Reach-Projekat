// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Milica(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Milica expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Milica expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v300 = stdlib.protect(ctc0, interact.deadline, 'for Milica\'s interact field deadline');
  const v301 = stdlib.protect(ctc0, interact.wager, 'for Milica\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v301, v300],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:10:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v301, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v305, v306], secs: v308, time: v307, didSend: v56, from: v304 } = txn1;
      
      sim_r.txns.push({
        amt: v305,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v317 = stdlib.safeAdd(v307, v306);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v305, v306], secs: v308, time: v307, didSend: v56, from: v304 } = txn1;
  ;
  const v317 = stdlib.safeAdd(v307, v306);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v317],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v304, v305, v306, v317],
      evt_cnt: 0,
      funcNum: 2,
      lct: v307,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v471, time: v470, didSend: v253, from: v469 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v304,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v471, time: v470, didSend: v253, from: v469 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:41:29:application',
      fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:57:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Milica'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v323, time: v322, didSend: v65, from: v321 } = txn2;
    const v325 = stdlib.add(v305, v305);
    ;
    let v326 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v327 = v322;
    let v334 = v325;
    
    let txn3 = txn2;
    while (await (async () => {
      const v342 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v342;})()) {
      const v349 = stdlib.safeAdd(v327, v306);
      const v353 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:65:43:application',
        fs: ['at ./index.rsh:64:16:application call to [unknown function] (defined at: ./index.rsh:64:20:function exp)'],
        msg: 'getHand',
        who: 'Milica'
        });
      const v354 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:66:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:64:16:application call to [unknown function] (defined at: ./index.rsh:64:20:function exp)'],
        msg: 'random',
        who: 'Milica'
        });
      const v355 = stdlib.digest([ctc0, ctc0], [v354, v353]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v304, v305, v306, v321, v334, v349, v355],
        evt_cnt: 1,
        funcNum: 4,
        lct: v327,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:69:12:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v358], secs: v360, time: v359, didSend: v91, from: v357 } = txn4;
          
          ;
          const v368 = stdlib.safeAdd(v359, v306);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v349],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v304, v305, v306, v321, v334, v349],
          evt_cnt: 0,
          funcNum: 5,
          lct: v327,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v437, time: v436, didSend: v206, from: v435 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v321,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v437, time: v436, didSend: v206, from: v435 } = txn5;
        ;
        const v438 = stdlib.addressEq(v304, v435);
        const v439 = stdlib.addressEq(v321, v435);
        const v440 = v438 ? true : v439;
        stdlib.assert(v440, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:70:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Milica'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:41:29:application',
          fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:70:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Milica'
          });
        
        return;
        
        }
      else {
        const {data: [v358], secs: v360, time: v359, didSend: v91, from: v357 } = txn4;
        ;
        const v361 = stdlib.addressEq(v304, v357);
        stdlib.assert(v361, {
          at: './index.rsh:69:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Milica'
          });
        const v368 = stdlib.safeAdd(v359, v306);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v368],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v304, v305, v306, v321, v334, v358, v368],
            evt_cnt: 0,
            funcNum: 7,
            lct: v359,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v419, time: v418, didSend: v172, from: v417 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v304,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v419, time: v418, didSend: v172, from: v417 } = txn6;
          ;
          const v420 = stdlib.addressEq(v304, v417);
          const v421 = stdlib.addressEq(v321, v417);
          const v422 = v420 ? true : v421;
          stdlib.assert(v422, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:78:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Milica'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:41:29:application',
            fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:78:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Milica'
            });
          
          return;
          
          }
        else {
          const {data: [v374], secs: v376, time: v375, didSend: v101, from: v373 } = txn5;
          ;
          const v377 = stdlib.addressEq(v321, v373);
          stdlib.assert(v377, {
            at: './index.rsh:77:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Milica'
            });
          const v384 = stdlib.safeAdd(v375, v306);
          const txn6 = await (ctc.sendrecv({
            args: [v304, v305, v306, v321, v334, v358, v374, v384, v354, v353],
            evt_cnt: 2,
            funcNum: 8,
            lct: v375,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:85:12:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v389, v390], secs: v392, time: v391, didSend: v111, from: v388 } = txn6;
              
              ;
              const v396 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:19:decimal', stdlib.UInt_max, '4'), v374);
              const v397 = stdlib.safeAdd(v390, v396);
              const v398 = stdlib.safeMod(v397, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '3'));
              const cv326 = v398;
              const cv327 = v391;
              const cv334 = v334;
              
              await (async () => {
                const v326 = cv326;
                const v327 = cv327;
                const v334 = cv334;
                
                if (await (async () => {
                  const v342 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v342;})()) {
                  const v349 = stdlib.safeAdd(v327, v306);
                  sim_r.isHalt = false;
                  }
                else {
                  const v453 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v456 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:12:decimal', stdlib.UInt_max, '2'), v305);
                  const v458 = v453 ? v304 : v321;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v458,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v384],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v304, v305, v306, v321, v334, v358, v374, v384],
              evt_cnt: 0,
              funcNum: 9,
              lct: v375,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v401, time: v400, didSend: v138, from: v399 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v321,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc1, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v401, time: v400, didSend: v138, from: v399 } = txn7;
            ;
            const v402 = stdlib.addressEq(v304, v399);
            const v403 = stdlib.addressEq(v321, v399);
            const v404 = v402 ? true : v403;
            stdlib.assert(v404, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:86:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Milica'
              });
            ;
            stdlib.protect(ctc2, await interact.informTimeout(), {
              at: './index.rsh:41:29:application',
              fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:86:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Milica'
              });
            
            return;
            
            }
          else {
            const {data: [v389, v390], secs: v392, time: v391, didSend: v111, from: v388 } = txn6;
            ;
            const v393 = stdlib.addressEq(v304, v388);
            stdlib.assert(v393, {
              at: './index.rsh:85:12:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Milica'
              });
            const v394 = stdlib.digest([ctc0, ctc0], [v389, v390]);
            const v395 = stdlib.digestEq(v358, v394);
            stdlib.assert(v395, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:87:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Milica'
              });
            const v396 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:19:decimal', stdlib.UInt_max, '4'), v374);
            const v397 = stdlib.safeAdd(v390, v396);
            const v398 = stdlib.safeMod(v397, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '3'));
            const cv326 = v398;
            const cv327 = v391;
            const cv334 = v334;
            
            v326 = cv326;
            v327 = cv327;
            v334 = cv334;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v453 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v456 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:12:decimal', stdlib.UInt_max, '2'), v305);
    const v458 = v453 ? v304 : v321;
    ;
    stdlib.protect(ctc2, await interact.seeOutcome(v326), {
      at: './index.rsh:98:24:application',
      fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:29:function exp)'],
      msg: 'seeOutcome',
      who: 'Milica'
      });
    
    return;
    }
  
  
  
  };
export async function Nikola(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Nikola expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Nikola expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v305, v306], secs: v308, time: v307, didSend: v56, from: v304 } = txn1;
  ;
  const v317 = stdlib.safeAdd(v307, v306);
  stdlib.protect(ctc1, await interact.acceptWager(v305), {
    at: './index.rsh:54:25:application',
    fs: ['at ./index.rsh:53:14:application call to [unknown function] (defined at: ./index.rsh:53:18:function exp)'],
    msg: 'acceptWager',
    who: 'Nikola'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v304, v305, v306, v317],
    evt_cnt: 0,
    funcNum: 1,
    lct: v307,
    onlyIf: true,
    out_tys: [],
    pay: [v305, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v323, time: v322, didSend: v65, from: v321 } = txn2;
      
      const v325 = stdlib.add(v305, v305);
      sim_r.txns.push({
        amt: v305,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v326 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v327 = v322;
      const v334 = v325;
      
      if (await (async () => {
        const v342 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v342;})()) {
        const v349 = stdlib.safeAdd(v327, v306);
        sim_r.isHalt = false;
        }
      else {
        const v453 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v456 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:12:decimal', stdlib.UInt_max, '2'), v305);
        const v458 = v453 ? v304 : v321;
        sim_r.txns.push({
          kind: 'from',
          to: v458,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v317],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v304, v305, v306, v317],
      evt_cnt: 0,
      funcNum: 2,
      lct: v307,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v471, time: v470, didSend: v253, from: v469 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v304,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v471, time: v470, didSend: v253, from: v469 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:41:29:application',
      fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:57:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Nikola'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v323, time: v322, didSend: v65, from: v321 } = txn2;
    const v325 = stdlib.add(v305, v305);
    ;
    let v326 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v327 = v322;
    let v334 = v325;
    
    let txn3 = txn2;
    while (await (async () => {
      const v342 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v342;})()) {
      const v349 = stdlib.safeAdd(v327, v306);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v349],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v304, v305, v306, v321, v334, v349],
          evt_cnt: 0,
          funcNum: 5,
          lct: v327,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v437, time: v436, didSend: v206, from: v435 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v321,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v437, time: v436, didSend: v206, from: v435 } = txn5;
        ;
        const v438 = stdlib.addressEq(v304, v435);
        const v439 = stdlib.addressEq(v321, v435);
        const v440 = v438 ? true : v439;
        stdlib.assert(v440, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:70:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Nikola'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:41:29:application',
          fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:70:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Nikola'
          });
        
        return;
        
        }
      else {
        const {data: [v358], secs: v360, time: v359, didSend: v91, from: v357 } = txn4;
        ;
        const v361 = stdlib.addressEq(v304, v357);
        stdlib.assert(v361, {
          at: './index.rsh:69:12:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Nikola'
          });
        const v368 = stdlib.safeAdd(v359, v306);
        const v372 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:75:53:application',
          fs: ['at ./index.rsh:74:16:application call to [unknown function] (defined at: ./index.rsh:74:20:function exp)'],
          msg: 'getHand',
          who: 'Nikola'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v304, v305, v306, v321, v334, v358, v368, v372],
          evt_cnt: 1,
          funcNum: 6,
          lct: v359,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:77:12:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v374], secs: v376, time: v375, didSend: v101, from: v373 } = txn5;
            
            ;
            const v384 = stdlib.safeAdd(v375, v306);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v368],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v304, v305, v306, v321, v334, v358, v368],
            evt_cnt: 0,
            funcNum: 7,
            lct: v359,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v419, time: v418, didSend: v172, from: v417 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v304,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v419, time: v418, didSend: v172, from: v417 } = txn6;
          ;
          const v420 = stdlib.addressEq(v304, v417);
          const v421 = stdlib.addressEq(v321, v417);
          const v422 = v420 ? true : v421;
          stdlib.assert(v422, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:78:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Nikola'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:41:29:application',
            fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:78:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Nikola'
            });
          
          return;
          
          }
        else {
          const {data: [v374], secs: v376, time: v375, didSend: v101, from: v373 } = txn5;
          ;
          const v377 = stdlib.addressEq(v321, v373);
          stdlib.assert(v377, {
            at: './index.rsh:77:12:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Nikola'
            });
          const v384 = stdlib.safeAdd(v375, v306);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v384],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v304, v305, v306, v321, v334, v358, v374, v384],
              evt_cnt: 0,
              funcNum: 9,
              lct: v375,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v401, time: v400, didSend: v138, from: v399 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v321,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v401, time: v400, didSend: v138, from: v399 } = txn7;
            ;
            const v402 = stdlib.addressEq(v304, v399);
            const v403 = stdlib.addressEq(v321, v399);
            const v404 = v402 ? true : v403;
            stdlib.assert(v404, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:86:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Nikola'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:41:29:application',
              fs: ['at ./index.rsh:40:9:application call to [unknown function] (defined at: ./index.rsh:40:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:39:28:function exp)', 'at ./index.rsh:86:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Nikola'
              });
            
            return;
            
            }
          else {
            const {data: [v389, v390], secs: v392, time: v391, didSend: v111, from: v388 } = txn6;
            ;
            const v393 = stdlib.addressEq(v304, v388);
            stdlib.assert(v393, {
              at: './index.rsh:85:12:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Nikola'
              });
            const v394 = stdlib.digest([ctc0, ctc0], [v389, v390]);
            const v395 = stdlib.digestEq(v358, v394);
            stdlib.assert(v395, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:87:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Nikola'
              });
            const v396 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:7:19:decimal', stdlib.UInt_max, '4'), v374);
            const v397 = stdlib.safeAdd(v390, v396);
            const v398 = stdlib.safeMod(v397, stdlib.checkedBigNumberify('./index.rsh:7:38:decimal', stdlib.UInt_max, '3'));
            const cv326 = v398;
            const cv327 = v391;
            const cv334 = v334;
            
            v326 = cv326;
            v327 = cv327;
            v334 = cv334;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v453 = stdlib.eq(v326, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v456 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:94:12:decimal', stdlib.UInt_max, '2'), v305);
    const v458 = v453 ? v304 : v321;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v326), {
      at: './index.rsh:98:24:application',
      fs: ['at ./index.rsh:97:7:application call to [unknown function] (defined at: ./index.rsh:97:29:function exp)'],
      msg: 'seeOutcome',
      who: 'Nikola'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAQAAFQBQkgCAcoAniAAQQDWDAmAwEAAQEAIjUAMRhBBI8qZEkiWzUBIQZbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSUMQAIsSSEHDEABOEkhBgxAAN5JIQQMQABWIQQSRCEENAESRDQESSISTDQCEhFEKGQpZFBJNQNXMCA1/4AEogVmjrAyBjQDIQtbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMkW7III7IQNP+yB7NCA6dIIQQ0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSSJbNf4hBls1/YAENRoq0DT+FlA0/RZQsDIGNAMhC1sMRDT/MQASRDQDV1ggNP4WNP0WUAESRDT/NAMhBVs0AyEIWzQDVzAgNP0hDDQDIQpbCQghDRgyBjQDJFtCAsVIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhClsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IC00mBBgxAAJdIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSlcAIDX/IQVbNf4hCFs1/VcwIDX8JFs1+1dYIDX6STUFFzX5gARw7e96NPkWULAyBjQDIQpbDEQ0/DEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUChLAVcAf2cpSwFXfwlnSCEENQEyBjUCQgJQSCU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDlsPRDQDVwAgMQASNP8xABIRRLEisgE0AyRbsggjshA0/7IHs0IB5kkhCQxAANBJIQwMQACISCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hCFs1/VcwIDX8JFs1+0k1BTX6gAQ4sCMtNPpQsDIGNAMhDlsMRDT/MQASRDIGNP0INfk0/zT+FlA0/RZQNPxQNPsWUDT6UDT5FlAoSwFXAH9nKUsBV38BZ0ghBzUBMgY1AkIBayEJEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ9bD0SxIrIBNAMhBVuyCCOyEDQDVwAgsgezQgEPSSMMQABISCM0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASai5F0sDIGNAMhD1sMRDT/iAFGNANXACA0/zQDIQhbMQAjMgY0/0kIQgBgSIGgjQaIASYiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBls1/oAErNEfwzT/FlA0/hZQsDT/iAD1MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB8Nf81/jX9Nfw1+zX6Nfk0/SMSQQAuNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIJTUBMgY1AkIAObEisgEhCTT6C7III7IQNPw0+TT9IQkSTbIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCENMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v649","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e9","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v651","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v656","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"v658","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v660","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T7","name":"v662","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v664","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v666","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v671","type":"tuple"}],"name":"_reachp_9","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062001f9e9081380391601f1980601f85011683019360018060401b0392848610848711176200037057816060928692604098895283398101031262000386578351606081018181108482111762000370578552835181526020908582860151958383019687520151918682019283524360035586519162000082836200038b565b6000809352875162000094816200038b565b83815260049160ff83541662000359577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808b513381528351878201528b518d82015288516060820152a15180159081156200034c575b50156200033557875134036200031e57845143018043116200030b57438110620003075781528851906080820182811089821117620002f4578a52838201958587528a830199868b5260608401938785523390525187525189525181526001978885554389558951953385880152518a8701525160608601525160808501526080845260a0840184811087821117620002e15788528351958611620002ce57600254908782811c92168015620002c3575b83831014620002b05750601f811162000264575b508093601f8611600114620001fc57505091839491849394620001f0575b50501b916000199060031b1c1916176002555b51611bf69081620003a88239f35b015192503880620001cf565b600283528183209493928692918316915b888383106200024957505050106200022f575b505050811b01600255620001e2565b015160001960f88460031b161c1916905538808062000220565b8587015188559096019594850194879350908101906200020d565b60028352818320601f870160051c810191838810620002a5575b601f0160051c019087905b82811062000299575050620001b1565b84815501879062000289565b90915081906200027e565b634e487b7160e01b845260229052602483fd5b91607f16916200019d565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b634e487b7160e01b865260418452602486fd5b8480fd5b634e487b7160e01b855260118352602485fd5b885163100960cb60e01b8152600981840152602490fd5b885163100960cb60e01b8152600881840152602490fd5b90506001541438620000ec565b895163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620003705760405256fe608080604052600436101561001a575b50361561001857005b005b60003560e01c9081631e93b0f11461172c575080632f1323021461159b57806330dd5d08146113f8578063573b851014611049578063832307571461102b578063ab53f2c614610fb7578063b3722a9914610e23578063b559601a146108fe578063e3342bfa146105e3578063ee9fe9921461022a5763f5a239bc146100a0573861000f565b60203660031901126102255760006040516100ba81611781565b526100c4366118a3565b60ff6004541661020c577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a604051806100fe8433836118d3565b0390a16001600054036101f3576101256101166117ee565b60208082518301019101611901565b905180159081156101e7575b50156101ce57606081015143106101b5573461019c57600080808093602060018060a01b0382511691015190828215610193575bf1156101875760008055600060015561017c6119a5565b602060405160008152f35b6040513d6000823e3d90fd5b506108fc610165565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b90506001541438610131565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b604036600319011261022557600060405161024481611781565b5261024e36611a31565b60405161025a81611781565b6000815260ff600454166105ca577f9449691f9246ec4b81aeb2f34bd8715f4e442367780c7ac745057e0a3a212bd660405180610298853383611a69565b0390a16007600054036105b1576102bf6102b06117ee565b60208082518301019101611aee565b90825180159081156105a5575b501561058c5760c0820151431015610573573461055c576060820151336001600160a01b039091160361054357610307604083015143611a1d565b8152602060405193610318856117b7565b60008552600082860152600060408601526000606086015260006080860152600060a0860152600060c0860152600060e086015260a0600180821b0385511694858752838101518488015260408101516040880152600180831b03606082015116606088015260808101516080880152015160a0860152015160c08401525160e0830152600960005560e0600192438455604051926020840152602081015160408401526040810151606084015260018060a01b036060820151166080840152608081015160a084015260a081015160c084015260c08101518284015201516101009081830152815261012081019060018060401b03918181108382111761052d57604052805191821161052d57610431600254611747565b601f81116104e5575b50602090601f831160011461047f57928293918392600094610474575b50501b916000199060031b1c191617600255602060405160008152f35b015192508480610457565b90601f1983169160026000528360206000209360005b878282106104cc575050106104b3575b505050811b0160025561017c565b015160001960f88460031b161c191690558280806104a5565b8486015187559095019460209485019487935001610495565b600260005261051d90600080516020611bca833981519152601f850160051c81019160208610610523575b601f0160051c019061198e565b8361043a565b9091508190610510565b634e487b7160e01b600052604160045260246000fd5b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b905060015414846102cc565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260206004820152602490fd5b60403660031901126102255760006040516105fd81611781565b5261060736611a31565b6040519061061482611781565b6000825260ff600454166108e5577f2b488b46f65093e5cc34b7a23106f60902da34f9221ba5c98d129851d4f8efe660405180610652843383611a69565b0390a16005600054036108cc576106676117ee565b9161067c602093848082518301019101611a90565b90825180159081156108c0575b50156108a75760a082015143101561088e57346108755781516001600160a01b039190339083160361085c5760408301936106c5855143611a1d565b82526106cf611956565b9280855116948585528781015196888601978852516040860190815260c0896080856060860151169460608a019586520151956080890196875201519560a088019687525196019586526007600055600197438955604051978a890152516040880152516060870152511660808501525160a08401525160c08301525160e082015260e0815261075e816117b7565b8051906001600160401b03821161052d5761077a600254611747565b601f811161082b575b508390601f83116001146107c6579282939183926000946107bb575b50501b916000199060031b1c1916176002555b60405160008152f35b01519250858061079f565b90601f19831691600260005283866000209360005b888883831061081457505050106107fb575b505050811b016002556107b2565b015160001960f88460031b161c191690558380806107ed565b8686015188559096019594850194879350016107db565b61085690600260005285600020601f850160051c81019187861061052357601f0160051c019061198e565b84610783565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541485610689565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b606036600319011261022557600060405161091881611781565b52604051606081016001600160401b0381118282101761052d576040526004358152602081019060243582526040810191604435835260ff60045416610e0a577fd6d1c39c0a5020e00dd6931b7ce85fc33eab108766c9c35e10ee90df64121f446080604051338152845160208201528351604082015285516060820152a1600960005403610df1576109bb6109ac6117ee565b60208082518301019101611b56565b91518015908115610de5575b5015610dcc5760e0820151431015610db35734610d9a578151336001600160a01b0390911603610d815760a0820151905183516040805160208101938452808201929092528152606081019290916001600160401b0384118385101761052d57836040528251902003610d6a575050610a3e611956565b9160018060a01b038251168352602082015160208401526040820151604084015260018060a01b0360608301511660608401525160c082015160040360048111610d3d57610a90600391608093611a1d565b06918184019283524360a0850152015160c083015260405190610ab282611781565b600082525160018103610c8f575060a090610ad582840151604085015190611a1d565b815260405190610ae48261179c565b600082526000602083015260006040830152600060608301526000608083015260008383015260c0600180851b03855116948584526020810151602085015260408101516040850152600180861b0360608201511660608501520151608083015251828201526005600055436001556040519260208401526020810151604084015260408101516060840152600180831b036060820151166080840152608081015182840152015160c082015260c08152610b9e816117d3565b80516001600160401b03811161052d57610bb9600254611747565b601f8111610c52575b50602091601f8211600114610c0757918192600092610bfc575b50508160011b916000199060031b1c191617600255602060405160008152f35b015190508280610bdc565b601f19821692600260005260206000209160005b858110610c3a575083600195106104b357505050811b0160025561017c565b91926020600181928685015181550194019201610c1b565b6002600052610c8990600080516020611bca833981519152601f840160051c8101916020851061052357601f0160051c019061198e565b82610bc2565b600214159050610d535780516001600160a01b0316906020905b0151906000918015908115610cff575b5015610225576000808093819382908215610cf5575b6001600160a01b031690f11561018757600080556000600155610cf06119a5565b61017c565b6108fc9150610ccf565b9092506001600160ff1b038111600116610d3d578060011b92610d2757820460021483610cb9565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60608101516001600160a01b031690602090610ca9565b63100960cb60e01b82526032606490910152602490fd5b60405163100960cb60e01b815260316004820152602490fd5b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b905060015414846109c7565b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b6020366003190112610225576000604051610e3d81611781565b52610e47366118a3565b60ff60045416610f9e577fd64d3134781556c6a626b018733c1e4f7a8f056da03bbd004578b0e46c1b667e60405180610e818433836118d3565b0390a1600960005403610f8557610e996109ac6117ee565b90518015908115610f79575b5015610f605760e08101514310610f475734610f2e5780516001600160a01b039081163303610f205760015b15610f07576000808084608082956060830151169101519082821561019357f1156101875760008055600060015561017c6119a5565b60405163100960cb60e01b815260386004820152602490fd5b338160608401511614610ed1565b60405163100960cb60e01b815260376004820152602490fd5b60405163100960cb60e01b815260366004820152602490fd5b60405163100960cb60e01b815260356004820152602490fd5b90506001541482610ea5565b60405163100960cb60e01b815260346004820152602490fd5b60405163100960cb60e01b815260336004820152602490fd5b3461022557600036600319011261022557600054610fd36117ee565b6040519182528160206040818301528251908160408401526000935b828510611012575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610fef565b34610225576000366003190112610225576020600154604051908152f35b60208060031936011261022557600060405161106481611781565b5261106e366118a3565b60ff600454166113df577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596604051806110a88433836118d3565b0390a160019081600054036113c6576110d06110c26117ee565b848082518301019101611901565b905180159081156113bb575b50156113a257606081015143101561138957828101908151340361137057611102611956565b60018060a01b039081835116815260408451938783019485520151906040810191825260608101933385526080820187815260a08301964388525160c0840190800181526040519161115383611781565b6000835251978989036112db576000979850906111798897969594939251865190611a1d565b825285604051998a9661118b8861179c565b8988528d8801958a87528360408a01988c8a5260a060608c019b8e8d52608081019e8f52019d8e525116809d525186525186525116855251865251865260056000554388556040519689880152516040870152516060860152511660808401525160a08301525160c082015260c08152611204816117d3565b8051906001600160401b03821161052d57611220600254611747565b601f81116112aa575b508390601f831160011461125f579282939183926000946107bb5750501b916000199060031b1c19161760025560405160008152f35b90601f19831691600260005283866000209360005b888883831061129357505050106107fb57505050811b016002556107b2565b868601518855909601959485019487935001611274565b6112d590600260005285600020601f850160051c81019187861061052357601f0160051c019061198e565b84611229565b50505093909150600283951460001461136657505116905b51906000918015908115611340575b50156102255760009283928392839283918315611336575b1690f11561018757600090818055556113316119a5565b6107b2565b6108fc925061131a565b9092506001600160ff1b0381118516610d3d5780851b92610d2757820460021486611302565b90505116906112f3565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b9050825414846110dc565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b602036600319011261022557600060405161141281611781565b5261141c366118a3565b60ff60045416611582577f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c1249604051806114568433836118d3565b0390a16005600054036115695761147d61146e6117ee565b60208082518301019101611a90565b9051801590811561155d575b50156115445760a0810151431061152b57346115125780516001600160a01b0390811633036115045760015b156114eb576000808084608082956060830151169101519082821561019357f1156101875760008055600060015561017c6119a5565b60405163100960cb60e01b8152601f6004820152602490fd5b3381606084015116146114b5565b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b90506001541482611489565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b60203660031901126102255760006040516115b581611781565b526115bf366118a3565b60ff60045416611713577fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d401604051806115f98433836118d3565b0390a16007600054036116fa576116116102b06117ee565b905180159081156116ee575b50156116d55760c081015143106116bc57346116a35780516001600160a01b0390811633036116955760015b1561167c576000808084608082958251169101519082821561019357f1156101875760008055600060015561017c6119a5565b60405163100960cb60e01b8152602b6004820152602490fd5b338160608401511614611649565b60405163100960cb60e01b8152602a6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b9050600154148261161d565b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b34610225576000366003190112610225576020906003548152f35b90600182811c92168015611777575b602083101461176157565b634e487b7160e01b600052602260045260246000fd5b91607f1691611756565b602081019081106001600160401b0382111761052d57604052565b60c081019081106001600160401b0382111761052d57604052565b61010081019081106001600160401b0382111761052d57604052565b60e081019081106001600160401b0382111761052d57604052565b60405190600060025461180081611747565b808552600191808316908115611884575060011461183e575b5050829003601f01601f191682016001600160401b0381118382101761052d57604052565b60026000908152602093509183600080516020611bca8339815191525b83851061187057505050508301013880611819565b80548886018301529301928490820161185b565b919250506020925060ff191682850152151560051b8301013880611819565b60209060031901126102255760405190602082016001600160401b0381118382101761052d576040526004358252565b6001600160a01b0390911681529051602082015260400190565b51906001600160a01b038216820361022557565b90816080910312610225576040519060808201906001600160401b0382118383101761052d57606091604052611936816118ed565b835260208101516020840152604081015160408401520151606082015290565b60405190611963826117d3565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b818110611999575050565b6000815560010161198e565b6119b0600254611747565b806119b85750565b601f81116001146119cb57506000600255565b6002600052611a1090601f0160051c600080516020611bca833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61198e565b6000602081208160025555565b9190820191828111610d3d57821061022557565b60409060031901126102255760408051919082016001600160401b0381118382101761052d5760405260043582526024356020830152565b6001600160a01b039091168152815160208083019190915290910151604082015260600190565b908160c09103126102255760a060405191611aaa8361179c565b611ab3816118ed565b83526020810151602084015260408101516040840152611ad5606082016118ed565b606084015260808101516080840152015160a082015290565b908160e09103126102255760c060405191611b08836117d3565b611b11816118ed565b83526020810151602084015260408101516040840152611b33606082016118ed565b60608401526080810151608084015260a081015160a0840152015160c082015290565b90816101009103126102255760e060405191611b71836117b7565b611b7a816118ed565b83526020810151602084015260408101516040840152611b9c606082016118ed565b60608401526080810151608084015260a081015160a084015260c081015160c0840152015160e08201529056fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 8094,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:51:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:57:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:95:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:62:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:70:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:71:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:78:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:79:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Milica": Milica,
  "Nikola": Nikola
  };
export const _APIs = {
  };
