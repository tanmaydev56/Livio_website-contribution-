import React, { useState } from 'react';
import "../styles/Customer-page.css";
import customerIcon from '../assets/images/customerIcon.svg'; 
import upArrow from '../assets/images/upArrow.svg'; 
import bagIcon from '../assets/images/bag.svg'; 
import orderIcon from '../assets/images/order.svg'; 
import downArrow from '../assets/images/down-arrow.svg';
import photoIcon from '../assets/images/photo.png'; 
import searchIcon from '../assets/images/search.svg'; 
import TotalSales from '../components/TotalSales';
import Transactions from '../components/Transactions';

const customers = [
  { name: 'John Doe', country: 'India', lastPurchases: 'Swing Chair', plan: 'Premium', rating: 5 },
  { name: 'Harry', country: 'Africa', lastPurchases: 'Sofa', plan: 'Silver', rating: 4 },
  { name: 'Margoni', country: 'Japan', lastPurchases: 'Hanging Chair', plan: 'Premium', rating: 5 },
  { name: 'Spana', country: 'China', lastPurchases: 'Swing Chair', plan: 'Gold', rating: 5 },
  { name: 'Peter', country: 'India', lastPurchases: 'Table', plan: 'Silver', rating: 4 },
  { name: 'Lamba', country: 'Belgium', lastPurchases: 'Bed', plan: 'Premium', rating: 5 },
  { name: 'John Doe', country: 'China', lastPurchases: 'Swing Chair', plan: 'Gold', rating: 4 },
  // ... more customers
];

const CustomerStats = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);

  
  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const data = {
    '2023': {
      Jan: 31,
      Feb: 69,
      Mar: 25,
      Apr: 61,
      May: 18,
      Jun: 31,
      Jul: 41,
      Aug: 47,
      Sep: 9,
      Oct: 14,
      Nov: 3,
      Dec: 64,
    },
    '2024': {
      Jan: 39,
      Feb: 43,
      Mar: 1,
      Apr: 2,
      May: 28,
      Jun: 38,
      Jul: 41,
      Aug: 20,
      Sep: 9,
      Oct: 20,
      Nov: 68,
      Dec: 13,
    },
  };

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <div className="customer-container">
      <div className="dashboard">
        <div className="card card-customer">
          <div className="icon-and-text">
            <img src={customerIcon} alt="Customer Icon" className="icon" />
            <div className="details">
              <h3>Total Customers</h3>
              <p className="number">12902</p>
              <p className="growth positive">
                <img src={upArrow} alt="Up Arrow" className="arrow-icon" />
                <span className="percentage">15%</span>
                <span className="year"> this year</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card-sales">
          <div className="icon-and-text">
            <img src={bagIcon} alt="Bag Icon" className="bag-icon" />
            <div className="details">
              <h3>Orders</h3>
              <p className="number">54321</p>
              <p className="growth negative">
                <img src={downArrow} alt="Down Arrow" className="arrow-icon" />
                <span className="percentage-red">2.5%</span>
                <span className="year"> this year</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card-transactions">
          <div className="icon-and-text">
            <img src={orderIcon} alt="Order Icon" className="icon" />
            <div className="details">
              <h3>Transactions</h3>
              <p className="number">7890</p>
              <p className="growth positive">
                <img src={upArrow} alt="Up Arrow" className="arrow-icon" />
                <span className="percentage">1.9%</span>
                <span className="year"> this year</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='all-customers'>
        <div className='all-customers-header'>
          <h2>All Customers</h2>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Country</th>
              <th>Last Purchases</th>
              <th>Plan</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) => (
              <tr key={customer.name}>
                <td className="customer-name">
                  <img src={photoIcon} alt="Customer Photo" className="photo-icon" />
                  <span className="name-text">{customer.name}</span>
                </td>
                <td className='country'>{customer.country}</td>
                <td className='purchase'>{customer.lastPurchases}</td>
                <td className='plan'>{customer.plan}</td>
                <td>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="rating-star">
                      ★
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination-container">
          <p className="entries-info">
            Showing {indexOfFirstCustomer + 1} to {indexOfLastCustomer} out of{' '}
            {filteredCustomers.length} entries
          </p>
          <div className="pagination">
            <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              &lt;
            </button>
            {[...Array(Math.ceil(filteredCustomers.length / customersPerPage))].map(
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={currentPage === i + 1 ? 'active' : ''}
                >
                  {i + 1}
                </button>
              )
            )}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(filteredCustomers.length / customersPerPage)}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      <div className='customers-overtime'>
        <h2 className="title">Customers over time</h2>
        <div className="chart">
          <div className="y-axis">
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} style={{ bottom: `${(index / 7) * 100}%` }}>
                {73 - (index * 10)}
              </div>
            ))}
          </div>
          <div className="x-axis">
            {months.map((month) => (
              <div key={month} className="month">
                {month}
              </div>
            ))}
          </div>
          <div className="bars">
            {months.map((month) => (
              <div key={month} className="bar-group">
                <div
                  className="bar"
                  style={{
                    height: `${(data['2023'][month] / 73) * 100}%`,
                    backgroundColor: '#EAB308',
                  }}
                />
                <div
                  className="bar"
                  style={{
                    height: `${(data['2024'][month] / 73) * 100}%`,
                    backgroundColor: '#808080',
                  }}
                />
              </div>
            ))}
          </div>
          <div className="legend">
            <div className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: 'gold' }}
              />
              <span className="legend-text">2023</span>
            </div>
            <div className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: 'grey' }}
              />
              <span className="legend-text">2024</span>
            </div>
          </div>
        </div>
      </div>


      <div className="totalsales-txn">
              <TotalSales />
              <Transactions />
 
      </div>
    </div>
  );
};

export default CustomerStats;
