import React from 'react'

function convertMoney() {
    // convert to VND
    function convertMoney(num) {
        return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    }
  return (
    <div>convertMoney</div>
  )
}

export default convertMoney