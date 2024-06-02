import { Dialog } from '@headlessui/react';

const AddCollectionModal = ({ collectioniModelIsOpen, handleAddCollection, newCollection, invoices, handleCloseModal, setNewCollection}) => {
    return (
        <Dialog open={collectioniModelIsOpen} onClose={handleCloseModal} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#F4FBFA] rounded-lg shadow-xl p-6 w-full max-w-md">
              <Dialog.Title className="text-lg font-bold">
                <div className='flex justify-between'>
                    <span>Collect Payment</span>
                    <button
                        className="text-gray-500"
                        onClick={handleCloseModal}
                    >
                        X
                    </button>
                </div>
              </Dialog.Title>
              <Dialog.Description>
                <div className="mt-4">
                  <p><strong>School Name:</strong> {'Shadrack Kimalel Pri School'}</p>
                </div>
              </Dialog.Description>
              <div className="mt-4">
                <div className="mb-4">
                  <label htmlFor="invoices" className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <select
                    id="invoices"
                    value={newCollection.invoiceId}
                    onChange={(e)=> setNewCollection({...newCollection, invoiceId: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="creditCard">Select Invoice</option>
                    {invoices.map(invoice => (
                        <option key={invoice.id} value={invoice.id}>{invoice.invoiceNo}</option>
                    ))}
                  </select>
                  <div className='flex justify-between my-10'>
                    <input
                        className="border p-2 rounded"
                        type="number"
                        placeholder="Collection Amount"
                        value={newCollection.amount}
                        onChange={(e) => setNewCollection({ ...newCollection, amountDue: parseFloat(e.target.value) })}
                        />
                        <select
                            className="border p-2 rounded"
                            value={newCollection.status}
                            onChange={(e) => setNewCollection({ ...newCollection, status: e.target.value })}
                            >
                            <option value="partial">Partial Payment</option>
                            <option value="full">Full Payment</option>
                            <option value="bounced">Bounced</option>
                        </select>
                  </div>

                </div>
                <button 
                    type="submit" 
                    className="bg-[#004940] text-white py-2 px-4 rounded hover:bg-[#004940d7] w-full"
                    onClick={handleAddCollection}
                    >
                  Submit Payment
                </button>
              </div>

            </div>
          </div>
        </Dialog>
      
    )
  }


  export default AddCollectionModal;