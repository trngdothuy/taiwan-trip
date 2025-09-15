const packingList = ["Hộ chiếu", "Quần áo, giày đi bộ", "Máy ảnh", "Thẻ ngân hàng", "Ổ điện"];
const tips = ["Tiền: TWD", "Thời tiết: 20-28°C", "Mua eSIM nội địa (Klook)", "Thẻ đi lại EasyCard", "App Uber"];

export default function PackingTips() {
  return (
    <div className="space-y-6  text-center">
      <div>
        <h3 className="text-xl font-bold mb-2">Danh sách đồ cần mang (đang cập nhật)</h3>
        <ul className="list-disc list-inside">{packingList.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Mẹo du lịch (đang cập nhật)</h3>
        <ul className="list-disc list-inside">{tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>
      </div>
    </div>
  );
}
