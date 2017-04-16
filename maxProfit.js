/**
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

*/
/**

 * @param {number[]} prices

 * @return {number}

 */

var maxProfit = function(prices) {

  var maxSoFar = 0;

  var max_cur = 0;

  for(var i=0;i<prices.length-1;i++)

  {

      max_cur = Math.max(0, max_cur + prices[i+1] - prices[i]);

      maxSoFar = Math.max(max_cur, maxSoFar);

  }

  return maxSoFar;

};// JavaScript Document