import React, { useState } from 'react';
import Footer from '../components/Footer';
import { X } from 'lucide-react';

const Price = () => {
  const [formData, setFormData] = useState({
    shippingMethod: '',
    status: '',
    originPincode: '',
    destinationPincode: '',
    codAmount: 0,
    paymentMode: '',
    shipmentType: '',
    invoiceAmount: 0
  });

  const [boxes, setBoxes] = useState([
    { weight: 100, l: 5, b: 5, h: 5, count: 2.5, wUnit: 'g' }
  ]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBoxChange = (index, key, value) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[index][key] = value;
    setBoxes(updatedBoxes);
  };

  const addBox = () => {
    setBoxes([...boxes, { weight: 100, l: 5, b: 5, h: 5, count: 2.5, wUnit: 'g' }]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    const boxesValid = boxes.every(
      (box) =>
        box.weight > 0 &&
        box.l > 0 &&
        box.b > 0 &&
        box.h > 0 &&
        box.count > 0 &&
        box.wUnit
    );

    const formValid = Object.values(formData).every(value => value !== '' && value !== null);

    if (boxesValid && formValid) {
      alert('Submitted Successfully!');
      window.location.reload(); // ✅ Refresh after successful submit
    } else {
      alert('Please fill in all the fields correctly.');
    }
  };

  return (
    <div>
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto p-4 bg-pink-50 shadow-md rounded-xl">
        <h2 className="text-xl font-bold text-center mb-4">Calculate Your Shipping Price</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Shipping Method</label>
            <select name="shippingMethod" value={formData.shippingMethod} onChange={handleFormChange} className="w-full border rounded px-3 py-2">
              <option value="">Select</option>
              <option>Surface</option>
              <option>Air</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Status</label>
            <select name="status" value={formData.status} onChange={handleFormChange} className="w-full border rounded px-3 py-2">
              <option value="">Select</option>
              <option>Forward</option>
              <option>Return</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Origin Pincode</label>
            <input type="text" name="originPincode" value={formData.originPincode} onChange={handleFormChange} placeholder="Ex. 813210" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Destination Pincode</label>
            <input type="text" name="destinationPincode" value={formData.destinationPincode} onChange={handleFormChange} placeholder="Ex. 845401" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">COD Amount</label>
            <input type="number" name="codAmount" value={formData.codAmount} onChange={handleFormChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Payment Mode</label>
            <select name="paymentMode" value={formData.paymentMode} onChange={handleFormChange} className="w-full border rounded px-3 py-2">
              <option value="">Select</option>
              <option>COD</option>
              <option>Prepaid</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Shipment Type</label>
            <select name="shipmentType" value={formData.shipmentType} onChange={handleFormChange} className="w-full border rounded px-3 py-2">
              <option value="">Select</option>
              <option>B2C</option>
              <option>B2B</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Invoice Amount</label>
            <input type="number" name="invoiceAmount" value={formData.invoiceAmount} onChange={handleFormChange} className="w-full border rounded px-3 py-2" />
          </div>
        </div>

        {boxes.map((box, index) => (
          <div key={index} className="relative mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 border p-3 rounded-md bg-white">
            <button
              onClick={() => removeBox(index)}
              className="absolute top-1 right-1 text-red-500 hover:text-red-700"
            >
              <X size={16} />
            </button>
            <div>
              <label className="block font-medium mb-1">Weight</label>
              <input type="number" value={box.weight} onChange={(e) => handleBoxChange(index, 'weight', Number(e.target.value))} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">L (In Cm)</label>
              <input type="number" value={box.l} onChange={(e) => handleBoxChange(index, 'l', Number(e.target.value))} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">B (In Cm)</label>
              <input type="number" value={box.b} onChange={(e) => handleBoxChange(index, 'b', Number(e.target.value))} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">H (In Cm)</label>
              <input type="number" value={box.h} onChange={(e) => handleBoxChange(index, 'h', Number(e.target.value))} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">Count</label>
              <input type="number" value={box.count} onChange={(e) => handleBoxChange(index, 'count', Number(e.target.value))} className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block font-medium mb-1">W Unit</label>
              <select value={box.wUnit} onChange={(e) => handleBoxChange(index, 'wUnit', e.target.value)} className="w-full border rounded px-3 py-2">
                <option>g</option>
                <option>kg</option>
              </select>
            </div>
          </div>
        ))}

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <button
            onClick={addBox}
            className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-100"
          >
            Add More Boxes
          </button>
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Submit and Compare
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Price;
