import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


export const OrderProgress = () => {
  return (
    <div className='w-full'>
        <ProgressBar
        percent={25}
        filledBackground="linear-gradient(to right, orange, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://www.freeiconspng.com/uploads/orange-check-tick-icon-14.png"
                alt="order"
              />
              <p className='absolute w-24 fs-400 fw-600 mt-1'>Package in Store</p>
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://www.freeiconspng.com/uploads/orange-check-tick-icon-14.png"
                alt="order"
              />
              <p className='absolute w-28 fs-400 fw-600 -left-4 mt-1 text-center'>Driver Pickup package</p>
          </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://www.freeiconspng.com/uploads/orange-check-tick-icon-14.png"
                alt="order"
              />
              <p className='absolute w-24 fs-400 fw-600 -left-4 mt-1 text-center'>Driver is on the way</p>
          </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                src="https://www.freeiconspng.com/uploads/orange-check-tick-icon-14.png"
                alt="order"
              />
              <p className='absolute -left-24 w-24 fs-400 fw-600 mt-4 text-center'>Delivered to customer</p>
          </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  )
}
