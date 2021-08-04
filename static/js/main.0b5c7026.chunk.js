(this["webpackJsonptictactoe-react-game"]=this["webpackJsonptictactoe-react-game"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var i=a(2),s=a.n(i),n=a(8),r=a.n(n),l=(a(13),a(3)),c=a(4),o=a(1),u=a(6),h=a(5),d=(a(14),a(0)),b=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).state={ai_screen:!1},i}return Object(c.a)(a,[{key:"render",value:function(){var t=this;return this.state.ai_screen?Object(d.jsxs)("div",{className:"StartScreen",children:[Object(d.jsx)("div",{className:"StartButton-L",onClick:function(){return t.props.ai_clickHandler("O")},children:"Play as X"}),Object(d.jsx)("div",{className:"StartButton-R",onClick:function(){return t.props.ai_clickHandler("X")},children:"Play as O"})]}):Object(d.jsxs)("div",{className:"StartScreen",children:[Object(d.jsx)("div",{className:"StartButton-L",onClick:function(){return t.setState({ai_screen:!0})},children:"Play Against AI"}),Object(d.jsx)("div",{className:"StartButton-R",onClick:function(){return t.props.clickHandler()},children:"Two Players"})]})}}]),a}(s.a.Component),v=(a(16),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).state={index:t.index,value:null},i.handleClick=i.handleClick.bind(Object(o.a)(i)),i}return Object(c.a)(a,[{key:"handleClick",value:function(){console.log(this.props),this.props.disable||this.props.ai_game&&this.props.current_turn===this.props.ai_turn||this.props.handleClick(this.state.index)}},{key:"render",value:function(){var t=this,e="block-button";return"X"===this.props.value&&(e="block-button X"),"O"===this.props.value&&(e+=" O"),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:e,onClick:function(){return t.handleClick()},children:this.props.value})})}}]),a}(s.a.Component));function g(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(j(t))return s&&console.log("getAIMove: gameEnded is true"),s?null:_(t);s&&console.log("turn: "+e);var n=O(t).slice(),r=2,l=1;"X"===e&&(r=-2),s&&(console.log("getAIMove: best = ",r),console.log("getAIMove: moves = ",n));for(var c=0;c<n.length;c++){var o=n[c],u=t.slice();u[o]=e;var h="X";"X"===e&&(h="O");var d=g(u,h,a,i,!1);if("X"===e&&r<d&&(r=d,l=o),"O"===e&&r>d&&(r=d,l=o),"X"===e&&(r>a&&(a=r),a>i))return!1;if(s&&console.log("At move "+o+" a= "+a+" b= "+i+" best= "+r),"O"===e&&(i=Math.min(r,i))<a)return!1}return s?(console.log("getAIMove: Best Move: ",l),l):r}function _(t){var e=m(t);return null===e?0:"X"===e?1:-1}function m(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<e.length;a++)if(null!=t[e[a][0]]&&t[e[a][0]]===t[e[a][1]]&&t[e[a][0]]===t[e[a][2]])return t[e[a][0]];return null}function j(t){if(m(t))return!0;for(var e=0;e<t.length;e++)if(null===t[e])return!1;return!0}function O(t){for(var e=[],a=0;a<t.length;a++)null===t[a]&&e.push(a);return e}a(17);var p=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var i;if(Object(l.a)(this,a),(i=e.call(this,t)).makeAIMove=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=[];if(a=t?t.slice():i.state.board.slice(),i.state.ai_game){var s=g(a,i.state.ai_turn);console.log(s),null!=s&&(a[s]=i.state.ai_turn),null!=s&&!i.state.gameOver&&e&&i.setState({board:a,player:"X"===i.state.ai_turn?"O":"X"})}return i.checkGameOver(a),a},i.resetGame=function(){var t=Array(9).fill(null),e="X";i.state.ai_game&&"X"===i.state.ai_turn&&(t=i.makeAIMove(Array(9).fill(null),!1),e="O"),i.setState({player:e,board:t,gameOver:!1,winner:null})},i.checkGameOver=function(t){var e=!1;if([[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]].forEach((function(a){null!=t[a[0]]&&t[a[1]]===t[a[0]]&&t[a[2]]===t[a[0]]&&(console.log(t[a[0]],t[a[1]],t[a[2]]),i.setState({winner:t[a[0]],gameOver:!0}),e=!0)})),e)return!0;var a=!1;return t.forEach((function(t){null===t&&(a=!0)})),!a&&(i.setState({winner:"D",gameOver:!0}),!0)},i.props.ai_game&&"X"===i.props.ai_turn){var s=Array(9).fill(null);s[0]="X",i.state={player:"O",board:s,gameOver:!1,winner:null,ai_turn:i.props.ai_turn,ai_game:i.props.ai_game,ai_is_playing:!1}}else i.state={player:"X",board:Array(9).fill(null),gameOver:!1,winner:null,ai_turn:i.props.ai_turn,ai_game:i.props.ai_game,ai_is_playing:!1};return i.blockClick=i.blockClick.bind(Object(o.a)(i)),i.checkGameOver=i.checkGameOver.bind(Object(o.a)(i)),i.resetGame=i.resetGame.bind(Object(o.a)(i)),i.makeAIMove=i.makeAIMove.bind(Object(o.a)(i)),i}return Object(c.a)(a,[{key:"blockClick",value:function(t){if(console.log(this.state),!this.state.gameOver){var e=this.state.board.slice();e[t]=this.state.player,this.checkGameOver(e),this.setState({board:e}),"X"===this.state.player?this.setState({player:"O"}):this.setState({player:"X"}),console.log("-----------"),console.log(e.slice(0,3).toString()),console.log(e.slice(3,6).toString()),console.log(e.slice(6,9).toString()),console.log("-----------"),this.state.ai_game&&this.makeAIMove(e)}}},{key:"render",value:function(){var t=this,e="";return this.state.gameOver&&("D"===this.state.winner&&(e="It's a Draw!"),"X"===this.state.winner&&(e="X Won!"),"O"===this.state.winner&&(e="O Won!")),Object(d.jsxs)("div",{className:"Board",children:[Object(d.jsxs)("div",{class:"d-flex align-items-center flex-column",children:[Object(d.jsxs)("div",{class:"d-flex align-items-center flex-row",children:[Object(d.jsx)(v,{index:"0",handleClick:this.blockClick,ai_game:this.state.ai_game,current_turn:this.state.player,ai_turn:this.state.ai_turn,value:this.state.board[0],disable:this.state.gameOver||this.state.ai_is_playing||this.state.board[0]}),Object(d.jsx)(v,{index:"1",handleClick:this.blockClick,ai_game:this.state.ai_game,current_turn:this.state.player,ai_turn:this.state.ai_turn,value:this.state.board[1],disable:this.state.gameOver||this.state.ai_is_playing||this.state.board[1]}),Object(d.jsx)(v,{index:"2",handleClick:this.blockClick,ai_game:this.state.ai_game,current_turn:this.state.player,ai_turn:this.state.ai_turn,value:this.state.board[2],disable:this.state.gameOver||this.state.ai_is_playing||this.state.board[2]})]}),Object(d.jsxs)("div",{class:"d-flex align-items-center flex-row",children:[Object(d.jsx)(v,{index:"3",handleClick:this.blockClick,ai_game:this.state.ai_game,current_turn:this.state.player,ai_turn:this.state.ai_turn,value:this.state.board[3],disable:this.state.gameOver||this.state.ai_is_playing||this.state.board[3]}),Object(d.jsx)(v,{index:"4",handleClick:this.blockClick,ai_game:this.state.ai_game,current_turn:this.state.player,ai_turn:this.state.ai_turn,value:this.state.board[4],disable:this.state.gameOver||this.state.ai_is_playing||this.state.board[4]}),Object(d.jsx)(v,{index:"5",handleClick:this.blockClick,ai_game:this.state.ai_game,current_turn:this.state.player,ai_turn:this.state.ai_turn,value:this.state.board[5],disable:this.state.gameOver||this.state.ai_is_playing||this.state.board[5]})]}),Object(d.jsxs)("div",{class:"d-flex align-items-center flex-row",children:[Object(d.jsx)(v,{index:"6",handleClick:this.blockClick,ai_game:this.state.ai_game,current_turn:this.state.player,ai_turn:this.state.ai_turn,value:this.state.board[6],disable:this.state.gameOver||this.state.ai_is_playing||this.state.board[6]}),Object(d.jsx)(v,{index:"7",handleClick:this.blockClick,ai_game:this.state.ai_game,current_turn:this.state.player,ai_turn:this.state.ai_turn,value:this.state.board[7],disable:this.state.gameOver||this.state.ai_is_playing||this.state.board[7]}),Object(d.jsx)(v,{index:"8",handleClick:this.blockClick,ai_game:this.state.ai_game,current_turn:this.state.player,ai_turn:this.state.ai_turn,value:this.state.board[8],disable:this.state.gameOver||this.state.ai_is_playing||this.state.board[8]})]}),Object(d.jsx)("div",{class:"d-flex align-items-center flex-row",children:Object(d.jsx)("button",{onClick:function(){return t.resetGame()},children:"Reset Game"})})]}),Object(d.jsx)("div",{class:"d-flex align-items-center justify-content-center flex-row",children:Object(d.jsx)("h1",{children:e})})]})}}]),a}(s.a.Component),f=(a(18),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var i;return Object(l.a)(this,a),(i=e.call(this,t)).state={mode:0,ai_game:!1,ai_turn:null},i.setMode=i.setMode.bind(Object(o.a)(i)),i.setupAI=i.setupAI.bind(Object(o.a)(i)),i.setupTwoPlayers=i.setupTwoPlayers.bind(Object(o.a)(i)),i}return Object(c.a)(a,[{key:"setMode",value:function(t){this.setState({mode:t})}},{key:"setupAI",value:function(t){this.setState({ai_game:!0,ai_turn:t,mode:1})}},{key:"setupTwoPlayers",value:function(){this.setState({ai_game:!1,ai_turn:"X",mode:1})}},{key:"render",value:function(){var t=this;return 1!==this.state.mode?Object(d.jsx)(b,{clickHandler:this.setupTwoPlayers,ai_clickHandler:this.setupAI}):Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(p,{ai_game:this.state.ai_game,ai_turn:this.state.ai_turn})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"HomeButton",onClick:function(){return t.setMode(0)},children:"Start Screen"})})]})}}]),a}(s.a.Component)),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(e){var a=e.getCLS,i=e.getFID,s=e.getFCP,n=e.getLCP,r=e.getTTFB;a(t),i(t),s(t),n(t),r(t)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),k()}],[[19,1,2]]]);
//# sourceMappingURL=main.0b5c7026.chunk.js.map