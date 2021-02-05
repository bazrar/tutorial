// // create pages dynamically
// exports.createPages = async ({graphql, actions} => {
//     const {createPage} = actions;
//     const result = await graphql(`
//    query getProduct {
//         products:allContentfulProduct {
//           nodes {
//             slug
//           }
//         }
//       }
//       `);

//       console.log('##########');
//       console.log(JSON.stringify(result));
//       console.log('##########');

//       return ("hello world!");

// }
