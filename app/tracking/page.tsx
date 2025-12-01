'use client'

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Button from '@/components/Button'

interface TrackingStep {
  id: string
  title: string
  description: string
  timestamp: string
  completed: boolean
  active: boolean
}

export default function TrackingPage() {
  const steps: TrackingStep[] = [
    {
      id: '1',
      title: 'Batch Assigned',
      description: 'Your order has been assigned to batch #1024',
      timestamp: '10:30 AM',
      completed: true,
      active: false,
    },
    {
      id: '2',
      title: 'Cleaning & Processing',
      description: 'Products are being cleaned and processed',
      timestamp: '11:15 AM',
      completed: true,
      active: false,
    },
    {
      id: '3',
      title: 'Quality Check Complete',
      description: 'All items passed quality inspection',
      timestamp: '12:00 PM',
      completed: true,
      active: false,
    },
    {
      id: '4',
      title: 'Packed',
      description: 'Order has been packed and ready for dispatch',
      timestamp: '1:30 PM',
      completed: true,
      active: false,
    },
    {
      id: '5',
      title: 'Out for Delivery',
      description: 'Your order is on the way',
      timestamp: '2:45 PM',
      completed: false,
      active: true,
    },
    {
      id: '6',
      title: 'Delivered',
      description: 'Order delivered successfully',
      timestamp: 'Expected: 4:00 PM',
      completed: false,
      active: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-dark mb-2">Track Your Order</h1>
        <p className="text-sm sm:text-base text-neutral-grey mb-6 sm:mb-8">Order #VF-2024-1024</p>

        <div className="bg-white border-2 border-neutral-light rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md">
          {/* Progress Tracker */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={step.id} className="relative pb-8 sm:pb-12 last:pb-0">
                {/* Vertical Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute left-4 sm:left-6 top-10 sm:top-12 w-0.5 h-full ${
                      step.completed ? 'bg-primary-green' : 'bg-neutral-light'
                    }`}
                  />
                )}

                {/* Step Content */}
                <div className="flex items-start gap-3 sm:gap-4">
                  {/* Circle */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                      step.completed
                        ? 'bg-primary-green'
                        : step.active
                        ? 'bg-primary-green ring-2 sm:ring-4 ring-green-200'
                        : 'bg-neutral-light'
                    }`}
                  >
                    {step.completed ? (
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <div
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                          step.active ? 'bg-white' : 'bg-neutral-grey'
                        }`}
                      />
                    )}
                  </div>

                  {/* Step Info */}
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 mb-1">
                      <h3
                        className={`text-base sm:text-lg font-semibold ${
                          step.completed || step.active
                            ? 'text-neutral-dark'
                            : 'text-neutral-grey'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-xs sm:text-sm text-neutral-grey">{step.timestamp}</span>
                    </div>
                    <p
                      className={`text-xs sm:text-sm ${
                        step.completed || step.active
                          ? 'text-neutral-grey'
                          : 'text-neutral-grey opacity-60'
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details Card */}
        <div className="mt-6 sm:mt-8 bg-neutral-beige rounded-xl sm:rounded-2xl p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-neutral-dark mb-3 sm:mb-4">Order Details</h2>
          <div className="space-y-2 text-sm sm:text-base text-neutral-grey">
            <div className="flex justify-between">
              <span>Order Number:</span>
              <span className="font-semibold text-neutral-dark">#VF-2024-1024</span>
            </div>
            <div className="flex justify-between">
              <span>Placed On:</span>
              <span className="font-semibold text-neutral-dark">Today, 10:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Slot:</span>
              <span className="font-semibold text-neutral-dark">3:00 PM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Total Amount:</span>
              <span className="font-semibold text-primary-green">₹1,200</span>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button href="/products" variant="outline" size="medium" className="w-full sm:w-auto">
            Continue Shopping
          </Button>
          <Button href="/cart" variant="primary" size="medium" className="w-full sm:w-auto">
            View Cart
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

