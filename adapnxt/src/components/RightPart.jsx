import React, { useState } from 'react';
import './RightPart.css';

function RightPart() {
  const initialProducts = [
    { id: 1, name: 'Personal Loan', category: 'Personal Loan', commissionType: 'VARIABLE', commissionValue: '5%', label: 'Popular', status: true },
    { id: 2, name: 'Home Loan', category: 'Home Loan', commissionType: 'VARIABLE', commissionValue: '0.7%', label: '', status: true },
    { id: 3, name: 'Business Loan', category: 'Business Loan', commissionType: 'VARIABLE', commissionValue: '2%', label: '', status: true },
    { id: 4, name: 'Credit Card', category: 'Credit Card', commissionType: 'FIXED', commissionValue: '₹500', label: '', status: true },
    { id: 5, name: 'ABCD app', category: 'Application', commissionType: 'FIXED', commissionValue: '₹50', label: 'Earn more', status: true },
    { id: 6, name: 'ABCD app test', category: 'Application', commissionType: 'VARIABLE', commissionValue: '5%', label: 'ABCD', status: false }
  ];

  const [products, setProducts] = useState(initialProducts);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', commissionType: '', commissionValue: '', label: '', status: true });
  const [editingProduct, setEditingProduct] = useState(null);

  // Toggle Product Status
  const toggleStatus = (id) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, status: !product.status } : product
    ));
  };

  // Handle Input Change
  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Add New Product
  const addProduct = () => {
    if (newProduct.name.trim()) {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
      setNewProduct({ name: '', category: '', commissionType: '', commissionValue: '', label: '', status: true });
      setShowForm(false);
    }
  };

  // Edit Product
  const editProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditingProduct(productToEdit);
  };

  // Save Edited Product
  const saveEdit = () => {
    setProducts(products.map(product =>
      product.id === editingProduct.id ? editingProduct : product
    ));
    setEditingProduct(null);
  };

  return (
    <div className="rightpart">
      <div className="header">
        <h2>Products</h2>
        <div className="buttons">
          <button className="refresh-btn">🔄 Refresh</button>
          <button className="add-product-btn" onClick={() => setShowForm(!showForm)}>
            {showForm ? "✖ Cancel" : "+ Add Product"}
          </button>
        </div>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <div className="product-form">
          <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
          <select name="commissionType" value={newProduct.commissionType} onChange={handleChange}>
            <option value="">Select Commission Type</option>
            <option value="VARIABLE">Variable</option>
            <option value="FIXED">Fixed</option>
          </select>
          <input type="text" name="commissionValue" placeholder="Commission Value" value={newProduct.commissionValue} onChange={handleChange} />
          <input type="text" name="label" placeholder="Label Tag" value={newProduct.label} onChange={handleChange} />
          <button className="save-btn" onClick={addProduct}>✅ Save</button>
        </div>
      )}

      {/* Products Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Commission Type</th>
              <th>Commission Value</th>
              <th>Label Tag</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                {editingProduct && editingProduct.id === product.id ? (
                  <>
                    <td><input type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} /></td>
                    <td><input type="text" value={editingProduct.category} onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })} /></td>
                    <td>
                      <select value={editingProduct.commissionType} onChange={(e) => setEditingProduct({ ...editingProduct, commissionType: e.target.value })}>
                        <option value="VARIABLE">Variable</option>
                        <option value="FIXED">Fixed</option>
                      </select>
                    </td>
                    <td><input type="text" value={editingProduct.commissionValue} onChange={(e) => setEditingProduct({ ...editingProduct, commissionValue: e.target.value })} /></td>
                    <td><input type="text" value={editingProduct.label} onChange={(e) => setEditingProduct({ ...editingProduct, label: e.target.value })} /></td>
                    <td>
                      <label className="toggle-switch">
                        <input type="checkbox" checked={editingProduct.status} onChange={() => setEditingProduct({ ...editingProduct, status: !editingProduct.status })} />
                        <span className="slider"></span>
                      </label>
                    </td>
                    <td>
                      <button className="save-btn" onClick={saveEdit}>💾 Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.commissionType}</td>
                    <td>{product.commissionValue}</td>
                    <td>{product.label}</td>
                    <td>
                      <label className="toggle-switch">
                        <input type="checkbox" checked={product.status} onChange={() => toggleStatus(product.id)} />
                        <span className="slider"></span>
                      </label>
                    </td>
                    <td>
                      <button className="edit-btn" onClick={() => editProduct(product.id)}>✏ Edit</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RightPart;
