import React from "react";
const Listofsong = [
  "https://a10.gaanacdn.com/gn_img/showcase/NOXWVRgWkq/OXWVRGgWkq/size_m_1523469605.webp",
  "https://a10.gaanacdn.com/gn_img/showcase/81l3Mye3rM/1l3Mype3rM/size_m_1641538400.webp",
  "https://a10.gaanacdn.com/gn_img/albums/10q3Z1K52r/q3ZjOpR035/size_l_1709621312.jpg",
  "https://a10.gaanacdn.com/gn_pl_img/playlists/P7m3GNKqxo/7m3GQwOybq/size_l_1707732163.webp",
  "https://a10.gaanacdn.com/gn_pl_img/playlists/9En3peWXDV/n3po26rkKX/size_l_1707485217.webp",
];
function Herosection() {
  return (
    <div>
      <div className="h-[350px] w-[350px]">
        {Listofsong.map((song, index) => (
          <img src={song} alt="songImage" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Herosection;
