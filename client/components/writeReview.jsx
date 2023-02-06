import React, {Fragment, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'

//changed description to actual description on lines 62-64. changed style and shown in lines 85-86

export const WriteReview = (props) => {
    
  let [isOpen, setIsOpen] = useState(false)
  let [body, setBody] = useState("")
  let [title, setTitle] = useState("")
  let [user, setUser] = useState("")

  let recordTitle = (event) => {
    setTitle(event.target.value)
    console.log(event.target.value)
  }

  let recordBody = (event) => {
    setBody(event.target.value)
    console.log(event.target.value)
  }
  
  let recordUser = (event) => {
    setUser(event.target.value)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const reviewdb = () => {
    console.log("hi")
    const newDate = new Date();
    const formattedDate = newDate.toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
    fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({username: user, title: title, body: body, date: formattedDate }),
        headers: {"Content-Type":"application/json"}
    })
    .then(res => res.json())
    .then() // send review back to be displayed
    
  }

  return (
    <div>
        <div className="relative inset-0 flex items-center ">
        <a
          onClick={openModal}
          className="rounded-md bg-white bg-opacity-20 text-sm font-medium text-black cursor-pointer"
        >
          <u>Write a review</u>
        </a>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    WRITE A REVIEW
                  </Dialog.Title>
                  <form onSubmit={reviewdb}>
                    <span>Please share your experience.</span>
                    <div className="mt-2">
                      <div>
                        <label htmlFor="body">Review</label>  
                        <textarea onChange={recordBody} name="body" id="body" rows="5" className='border-black border'>

                        </textarea>
                      </div>  
                      <div>
                      <label htmlFor="title">Review Title</label>
                      <input onChange={recordTitle} type="text" name='title' placeholder='title' className='border-black border'/>
                      </div>
                      <div>
                        <label htmlFor="username">Username</label>
                        <input onChange={recordUser} type="text" name='username' placeholder='username' className='border border-black'/>
                      </div>
                    </div>
                    <button type='submit'>
                      Submit
                    </button>
                  </form>
                    <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black-900 hover:text-black-500 cursor-pointer"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </div>
                </Dialog.Panel>
                
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
    
  )
}
