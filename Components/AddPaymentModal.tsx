import { X } from 'lucide-react';

interface Supplier {
  id: string;
  name: string;
  tenants: string[];
  currency: string;
  apBalance: number;
  lastPaymentDate: string;
  lastPaymentAmount: number;
  nextPayoutDate: string;
  type: string;
}

interface AddPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  supplier?: Supplier;
}

export function AddPaymentModal({ isOpen, onClose, supplier }: AddPaymentModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h3 className="text-gray-900">Add Payment Entry</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div>
              <label className="text-sm text-gray-700 mb-2 block">Supplier</label>
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                defaultValue={supplier?.name || ""}
              >
                <option value="">Select supplier</option>
                {supplier && <option value={supplier.name}>{supplier.name}</option>}
                <option value="Superlogic">Superlogic</option>
                <option value="ONE Company">ONE Company</option>
                <option value="Marriott Hotels">Marriott Hotels</option>
                <option value="GetYourGuide">GetYourGuide</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-2 block">Type</label>
              <select 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                defaultValue={supplier?.type || ""}
              >
                <option value="">Select vertical</option>
                <option value="Hotels">Hotels</option>
                <option value="Sweepstakes">Sweepstakes</option>
                <option value="Experiences">Experiences</option>
                <option value="Ticketing">Ticketing</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-2 block">Tenant</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Select tenant</option>
                <option>Air Shop</option>
                <option>Crypto.com</option>
                <option>BookIt</option>
                <option>Qiibee</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-2 block">Payment Date</label>
              <input
                type="date"
                placeholder="-------- ----"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-2 block">Payment Rail</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Select payment rail</option>
                <option>Wire Transfer</option>
                <option>ACH</option>
                <option>Card</option>
                <option>Crypto</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 mb-2 block">Amount</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 mb-2 block">Currency</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>USDC</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-2 block">Memo / Notes</label>
              <textarea
                rows={4}
                placeholder="Enter references to bank statements, client GL, QuickBooks, or other supporting documentation..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>

          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
