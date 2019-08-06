/*

    // SOME DATA JUST TO TEST THE FUNCTION

    let dataTest = [
        {
            store: "Walmart",
            product_name : "Coxinha"
        },
        {
            store: "Amazon",
            product_name : "Pastel"
        }];
    
    let dataInput = 'amz'; // IT REFERS TO THE MODEL, EDIT IT TO CHANGE THE DATA RESULT

    let attr = 'store'

*/

/**
 * Filter data by a text input
 * @param  {String}     model           Refers to a data input
 * @param  {Array}      arrayData       The database or array you want to filter
 * @param  {String}     attribute       The database or object attribute
*/
  
  function filterData(model, arrayData, attribute){
      var result = [];
      var regexp = new RegExp((".*"+model.split("").join('.*')+".*"), "i");
      arrayData.filter((obj) =>{
          if(obj[attribute].match(regexp)){
              result.push(obj);
          }
      })
      return result;
  }
  