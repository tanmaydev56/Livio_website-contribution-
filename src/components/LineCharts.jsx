

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const LineCharts = () => {
  const data = [
    { name: 'Jan', LoyalCustomers: 200, NewCustomers: 300, UniqueCustomers: 250 },
    { name: 'Feb', LoyalCustomers: 100, NewCustomers: 200, UniqueCustomers: 350 },
    { name: 'Mar', LoyalCustomers: 200, NewCustomers: 320, UniqueCustomers: 240 },
    { name: 'Apr', LoyalCustomers: 130, NewCustomers: 280, UniqueCustomers: 170 },
    { name: 'May', LoyalCustomers: 200, NewCustomers: 350, UniqueCustomers: 290 },
    { name: 'Jun', LoyalCustomers: 170, NewCustomers: 300, UniqueCustomers: 210 },
    { name: 'Jul', LoyalCustomers: 300, NewCustomers: 370, UniqueCustomers: 150 },
    { name: 'Aug', LoyalCustomers: 150, NewCustomers: 330, UniqueCustomers: 300 },
    { name: 'Sep', LoyalCustomers: 270, NewCustomers: 290, UniqueCustomers: 210 },
    { name: 'Oct', LoyalCustomers: 200, NewCustomers: 320, UniqueCustomers: 230 },
    { name: 'Nov', LoyalCustomers: 260, NewCustomers: 350, UniqueCustomers: 170 },
    { name: 'Dec', LoyalCustomers: 270, NewCustomers: 290, UniqueCustomers: 250 },
  ];
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <XAxis
          dataKey="name"
          stroke="#464E5F"
          tickLine={false}
          axisLine={false}
          interval={0}
          tickMargin={4}
          style={{
            fontSize: '16px',
            fontFamily: 'Apfel Grotezk',
            fontWeight: '500',
            lineHeight: '16px',
            textAlign: 'center',
            color: 'var(--Primary-200, #000)',
          }}
        />
        <YAxis
          type="number"
          domain={[0, 400]}
          ticks={[0, 100, 200, 300, 400]}
          allowDecimals={false}
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#8884d8' }}
          style={{
            fontSize: '16px',
            fontFamily: 'Apfel Grotezk',
            fontWeight: '400',
            lineHeight: '16px',
            textAlign: 'center',
            color: 'var(--Primary-200, #7B91B0)',
          }}
        />
        <Line
          type="monotone"
          dataKey="LoyalCustomers"
          stroke="#A700FF"
          strokeWidth={4}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="NewCustomers"
          stroke="#EF4444"
          strokeWidth={4}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="UniqueCustomers"
          stroke="#3CD856"
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
