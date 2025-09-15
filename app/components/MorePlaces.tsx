const list = [
    {
    location: "Hồ Nhật Nguyệt - Nam Đẩu",
    img: "https://dulichokela.com/wp-content/uploads/2023/07/ho-nhat-nguyet-kham-pha-ve-dep-tien-canh-dap-xe-quanh-ho.jpg",
    description: "- Được in trên sách giáo khoa, là chốn 'tiên cảnh' của Đài Loan\n \ Đi thuyền quanh hồ\n - Có thể đi từ Đài Bắc, mất 1 ngày, cân nhắc có thể bỏ Đài Nam để đi",
},
{
    location: "Núi Alishan",
    img: "https://www.agoda.com/wp-content/uploads/2024/03/Featured-image-Alishan-National-Scenic-Area-Chiayi-Taiwan.jpg",
    description: "- 1 điểm rất nổi tiếng của Đài Loan nữa, nhưng sợ phải đi bộ nhiều, cân nhắc nếu đến đây con/em phải xem có thể thuê xe lăn cho mẹ đỡ phải đi bộ\n - Chắc cũng đi mất 1 ngày là ít nhất ạ",
},
{
    location: "Rừng Quốc Gia Basianshan - Đài Trung",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/e4/a3/32/basianshan-national-forest.jpg?w=900&h=500&s=1",
    description: "- Ở Đài Trung, nếu đi 1 ngày sợ hơi gấp ạ. Ở lại lâu hơn thì mình có thể đến đây nữa\n - Chỗ này có thể thuê xe lăn cho mẹ đỡ phải đi bộ (để con check lại kĩ)",
},
]

export default function MorePlaces() {
  return (
    <div className="space-y-6  text-center">
      <div>
        <h3 className="text-xl font-bold mb-2">Những nơi cân nhắc tới (đang cập nhật)</h3>
        <div className="p-4 grid md:grid-cols-3 gap-6">{list.map((item) => 
            <div 
                key={item.location}
                  className="border rounded-lg shadow hover:scale-105 transition-transform duration-200 overflow-hidden"
            >
                <img
                    src={item.img}
                    alt={item.location}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="font-bold text-lg mb-1">{item.location}</h4>
                    <p className="text-sm mb-2 whitespace-pre-line">{item.description}</p>
                    </div>

            </div>
            )}</div>
      </div>
    </div>
  );
}
