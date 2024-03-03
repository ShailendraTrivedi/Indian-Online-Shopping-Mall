export default function OrderHistory() {
  return (
    <div className="space-y-[50px]">
      <h4 className="text-h4 font-semibold text-center">
        Order History - Your Shopping Timeline
      </h4>
      <table class="border-separate border-spacing-2 w-full">
        <thead>
          <tr>
            <th>Order</th>
            <th>ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 50 }).map((_, i) => (
            <tr>
              <td className="w-[5rem] h-[5rem] bg-black10"></td>
              <td className="text-center">#0123456789</td>
              <td className="text-center">12/12/2024</td>
              <td className="text-center">Accepted</td>
              <td className="text-center">Air Jordan XXXVIII</td>
              <td className="text-center">₹18,350.00</td>
              <td className="text-center">{i + 1}</td>
              <td className="text-center">₹18,350.00</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
