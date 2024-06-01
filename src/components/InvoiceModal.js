import { Dialog } from '@headlessui/react';

const InvoiceModal = ({ selectedInvoice, isOpen, handleCloseModal }) => {
    return (
        <Dialog open={isOpen} onClose={handleCloseModal} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#F4FBFA] rounded-lg shadow-xl p-6 w-full max-w-md">
              <Dialog.Title className="text-lg font-bold">Collect Payment</Dialog.Title>
              <Dialog.Description>
                <div className="mt-4">
                  <p><strong>School Name:</strong> {selectedInvoice.name}</p>
                  <p><strong>Amount Due:</strong> Ksh. {selectedInvoice.amountDue}</p>
                  <p><strong>Due Date:</strong> {new Date(selectedInvoice.dueDate).toLocaleDateString()}</p>
                </div>
              </Dialog.Description>
              <form className="mt-4">
                <div className="mb-4">
                  <label htmlFor="paymentAmount" className="block text-sm font-medium text-gray-700">Payment Amount</label>
                  <input
                    type="number"
                    id="paymentAmount"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder={`Enter amount to collect (max ${selectedInvoice.amountDue})`}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <select
                    id="paymentMethod"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="creditCard">Credit Card</option>
                    <option value="bankTransfer">Bank Transfer</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <button type="submit" className="bg-[#004940] text-white py-2 px-4 rounded hover:bg-[#004940d7]">
                  Submit Payment
                </button>
              </form>
              <button
                className="mt-4 text-gray-500 hover:text-gray-700"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog>
      
    )
  }


  export default InvoiceModal;