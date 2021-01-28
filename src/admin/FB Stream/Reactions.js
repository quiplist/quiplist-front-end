// import EmojiReact from 'react-emoji-react';
// import React, { Component } from 'react';

// const emojis = [

//   {
//     name: '+1',
//     count: 1
//   },
//   {
//     name: 'heart',
//     count: 1
//   },
//   {
//     name: 'grinning',
//     count: 1
//   },
// ];

// class Reactions extends Component {
//   constructor() {
//     super();
//     this.state = {
//       emojis
//     };
//   }

//   onReaction(name) {
//     const emojis = this.state.emojis.map(emoji => {
//       if (emoji.name === name) {
//         emoji.count += 1;
//       }
//       return emoji;
//     });
//     this.setState({ emojis });
//   }

//   onEmojiClick(name) {
//     console.log(name);
//     var emojiArr = this.state.emojis;
//     for (var i = 0; i < emojiArr.length; i++){
//         if(emojiArr[i].name == name){
//           const emojis = this.state.emojis.map(emoji => {
//             if (emoji.name === name) {
//               emoji.count += 1;
//             }
//             return emoji;
//           });
//           this.setState({ emojis });
//         }else{
//           const emojis = this.state.emojis.concat([{name, count: 1}]);
//           this.setState({ emojis });
//         }
//     }    
//   }

//   render() {
//     return (
//       <EmojiReact 
//         reactions={this.state.emojis} 
//         onReaction={(name) => this.onReaction(name)} 
//         onEmojiClick={(name) => this.onEmojiClick(name)}
//       />
//     );
//   }
// }

// export default Reactions;
