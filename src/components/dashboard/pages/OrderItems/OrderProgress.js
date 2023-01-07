import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


export const OrderProgress = () => {
  return (
    <div className='md:w-full w-96 pb-8 lg:pb-0 px-6 lg:px-4 md:px-6'>
        <ProgressBar
        percent={2}
        filledBackground="linear-gradient(to right, orange, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                // width="30"
                className='lg:w-20 md:w-10 w-5'
                src="https://www.freeiconspng.com/uploads/orange-check-tick-icon-14.png"
                alt="order"
              />
              <p className='absolute text-center lg:w-24 text-xs lg:fs-400 fw-600 mt-1'>Package in Store</p>
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                // width="30"
                className='lg:w-20 md:w-10 w-5'
                src="https://www.freeiconspng.com/uploads/orange-check-tick-icon-14.png"
                alt="order"
              />
              <p className='absolute lg:w-28 text-xs lg:fs-400 fw-600 -left-4 mt-1 text-center'>Driver Pickup package</p>
          </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                // width="30"
                className='lg:w-20 md:w-10 w-5'
                src="https://www.freeiconspng.com/uploads/orange-check-tick-icon-14.png"
                alt="order"
              />
              <p className='absolute lg:w-24 w-16 text-xs lg:fs-400 fw-600 -left-5 lg:-left-3 mt-1 text-center'>Driver is on the way</p>
          </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                // width="30"
                className='lg:w-20 md:w-10 w-5'
                src="https://www.freeiconspng.com/uploads/orange-check-tick-icon-14.png"
                alt="order"
              />
              <p className='absolute lg:-left-16 lg:mt-8 -left-8 lg:w-24 text-xs lg:fs-400 fw-600 mt-4 text-center'>Delivered to customer</p>
          </div>
          )}
        </Step>
      </ProgressBar>
    </div>
  )
}
