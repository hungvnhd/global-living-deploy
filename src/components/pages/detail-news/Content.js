import React from "react";
import DetailNewsItem from "./NewsItem";
import DetailNewsPagePagination from "./Pagination";
import DetailNewsPageRelateNews from "./RelateNews";
import DetailNewsPageSource from "./Source";

const listNews = [
	{
		firstContent: `Tham khảo những gợi ý về bố cục phong thủy năm 2023 từ chuyên gia phong thủy Hong Kong – ông Long Chấn Thiên, sẽ giúp bạn biết được các hướng hung – cát trong ngôi nhà ra sao.`,
		image: "/images/detail-news/image-2.png",
	},
	{
		title: "Bố cục phong thủy năm 2023 Quý Mão",
		firstContent: `Theo đó, mỗi phương vị trong nhà sẽ có một sao chiếu riêng, mang
        tới may mắn hoặc gây ra vận rủi tùy từng khu vực. Hướng Chính
        Đông: Sao Nhị Hắc Cự Môn tinh chủ về bệnh tật, đau ốm Trong năm
        2023, vị trí Chính Đông trong căn nhà sẽ do sao Nhị Hắc Cự Môn
        cư ngụ. Đây là hung tinh chủ về ốm đau, bệnh tật. Do đó, nếu đặt
        phòng ngủ ở đây sẽ gây nhiều ảnh hưởng đến sức khỏe của người
        trong phòng. Còn nếu vị trí này đặt bếp cũng rất xấu, có thể gây
        bất lợi cho sức khỏe của cả nhà, đặc biệt là vùng bụng và dạ
        dày. Để hóa giải hung khí của vị trí Chính Đông, gia chủ có thể
        đặt 5 đồng tiền xu phong thủy hoặc 1 quả chuông đồng ở đây. Các
        vật phẩm phong thủy này có tác dụng giúp xua đuổi tà khí, tăng
        cường may mắn về sức khỏe cho mọi người.`,
		secondContent: `Hướng Đông Nam: Tam Bích Lộc Tồn tinh chủ về thị phi, quan tai
        Tại vị trí Đông Nam, năm 2023 đây là nơi sao Tam Bích Lộc Tồn
        tinh quân làm chủ tinh. Sao Tam Bích vốn là một hung tinh chủ về
        thị phi, quan tai. Do đó, gia chủ cần hết sức chú ý đến bài trí
        phong thủy ở vị trí này để tránh vô tình rước thị phi cho bản
        thân và gia đình.`,
		image: "/images/detail-news/image-2.png",
	},
	{
		title: "Vị trí màu sắc phong thủy",
		firstContent: `Hướng Chính Nam: Sao Bát Bạch Tả Phù tinh chủ về tài lộc, sự nghiệp
        Chuyên gia phong thủ Long Chấn Thiên chỉ ra rằng, năm 2023, phương vị Chính Nam trong nhà là nơi có sao Bát Bạch Tả Phù trú ngụ. Đây là một cát tinh chủ về tài lộc, sự nghiệp. Nếu biết cách bố trí phong thủy phù hợp, sẽ đem tới may mắn cho gia chủ về công danh tiền bạc.`,
		secondContent: `Đối với hướng Tây Nam, Cửu cung phi tinh năm 2023 chỉ ra rằng đây là phương vị nơi sao Nhất Bạch Tham Lang xuất hiện. Trong cửu tinh, sao Nhất Bạch là cát tinh chủ đề đào hoa và tình duyên.
        `,
		image: "/images/detail-news/image-3.png",
	},
];

const DetailNewsPageContent = () => {
	return (
		<section className="DetailNewsPage__content">
			<div className="DetailNewsPage__content-inner">
				<div className="select-box">
					<span>DANH MỤC NỘI DUNG</span>
					<img
						src="/images/detail-news/suffix-select.png"
						alt="suffix"
					/>
				</div>

				<div className="DetailNewsPage__content-content">
					{listNews?.map((news, index) => {
						return (
							<DetailNewsItem
								key={index}
								index={index}
								news={news}
							/>
						);
					})}
				</div>

				<DetailNewsPageSource />

				<DetailNewsPagePagination />

				<DetailNewsPageRelateNews />
			</div>
		</section>
	);
};

export default DetailNewsPageContent;
