// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  let hours = parseFloat(document.getElementById('hours-worked').value)
  let rate = parseFloat(document.getElementById('rate-of-pay').value) 

  // process
  const TAX_RATE = 0.18
  let total = (hours * rate)
  let tax = (total * TAX_RATE)
  let pay = (total - tax)
  let taxRounded = tax.toFixed(2);
  let payRounded = pay.toFixed(2);

  // output
  document.getElementById('taxRounded').innerHTML = 'The governement will take' + ' $' + tax  
  document.getElementById('payRounded').innerHTML = 'Your pay will be' + ' $' + pay  
}