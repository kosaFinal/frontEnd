import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserSearch.css";
import UserSearchInput from "./UserSearchInput";

const { kakao } = window;

const UserSearch = () => {
  const [showInput, setShowInput] = useState(false);
  const [map, setMap] = useState(null);
  const [showMarker, setShowMarker] = useState([
    {
      title: "스타벅스 가산디지털단지점",
      address: "서울 금천구 가산디지털1로 168 우림라이온스벨리 B동 1층",
      phoneno: "1522-3232",
      latlng: new kakao.maps.LatLng(37.4798434, 126.8824217),
    },
  ]);

  const toggleUserSearchInput = () => {
    setShowInput(!showInput);
  };

  var imageSrc = "/assets/marker_red_2.png", // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(57, 60), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 60) };
  var markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  useEffect(() => {
    let overlays = [];

    const initMap = (lat, lon) => {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 3,
      };

      const newMap = new kakao.maps.Map(mapContainer, mapOption);
      setMap(newMap);

      // 마커 및 오버레이 로직
      showMarker.forEach((markerData) => {
        var marker = new kakao.maps.Marker({
          map: newMap, // 여기서 newMap 사용
          position: markerData.latlng,
          image: markerImage,
        });
        var content =
          '<div class="wrap">' +
          '    <div class="info">' +
          '        <div class="title">' +
          showMarker.map((marker) => marker.title).join(", ") +
          '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
          "        </div>" +
          '        <div class="body">' +
          '            <div class="img">' +
          '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">' +
          "           </div>" +
          '            <div class="desc">' +
          '                <div class="ellipsis">' +
          showMarker.map((marker) => marker.address).join(", ") +
          "</div>" +
          '                <div class="jibun ellipsis">' +
          showMarker.map((marker) => marker.phoneno).join(", ") +
          "</div>" +
          "            </div>" +
          "        </div>" +
          "    </div>" +
          "</div>";
        kakao.maps.event.addListener(marker, "click", function () {
          closeAllOverlays();
          openOverlay(content, marker.getPosition());
        });

        function openOverlay(content, position) {
          var overlay = new kakao.maps.CustomOverlay({
            map: newMap, // 여기서 newMap 사용
            position: position,
          });

          var overlayContent = document.createElement("div");
          overlayContent.innerHTML = content;
          var closeBtn = document.createElement("div");
          closeBtn.className = "close";
          closeBtn.title = "닫기";
          closeBtn.onclick = function () {
            closeOverlay();
          };
          overlayContent.querySelector(".title").appendChild(closeBtn);

          overlay.setContent(overlayContent);
          overlays.push(overlay);
        }

        function closeOverlay() {
          overlays.forEach((overlay) => {
            overlay.setMap(null);
          });
        }
      });

      function closeAllOverlays() {
        overlays.forEach((overlay) => {
          overlay.setMap(null);
        });
      }
    };

    const initMapAtUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            initMap(lat, lon);
          },
          () => {
            console.error("Cannot access user location");
            initMap(37.479943, 126.88268);
          }
        );
      }
    };

    initMapAtUserLocation();
  }, [showMarker]);
  const handleClick = () => {
    if (map) {
      // map이 null이 아닌 경우에만 작동
      var moveLatLon = new kakao.maps.LatLng(37.479943, 126.88268);
      map.panTo(moveLatLon);
    } else {
      console.error("Error: map is null");
    }
  };
  return (
    <div className="usersearch">
      <div className="map_nav">
        <div className="user_search">
          <div id="map"></div>
        </div>

        <div className="searchnav">
          <Link to="/user">
            <div className="searchnav_to_home">
              <img src="/assets/home.png" alt="home" />
              <h5>HOME</h5>
            </div>
          </Link>
          <div
            className="searchnav_map"
            onClick={() => setShowInput(!showInput)}
          >
            <img src="/assets/searchnav_map.png" alt="search map" />
            <h5>MAP</h5>
          </div>
          <div className="searchnav_time">
            <Link to="/user/reservationstatus">
              <img src="/assets/searchnav_time.png" alt="search time" />
              <h5>
                실시간 예약
                <br /> 현황
              </h5>
            </Link>
          </div>
          <div className="searchnav_mypage">
            <Link to="/user/mypage">
              <img src="/assets/searchnav_mypage.png" alt="search mypage" />
              <h5>마이 페이지</h5>
            </Link>
          </div>
          <div className="searchnav_calendar">
            <Link to="/user/myreservation">
              <img src="/assets/searchnav_calendar.png" alt="search calendar" />
              <h5>
                날짜별 예약
                <br /> 내역 조회
              </h5>
            </Link>
          </div>
          <div className="map_button">
            <button className="map_button1">현 지도에서 검색</button>
            <button onClick={handleClick} className="map_button2">
              <img src="/assets/search-target.png" alt="search target" />
            </button>
          </div>
        </div>
        {showInput && (
          <div className="searchnav-right">
            <UserSearchInput onClose={toggleUserSearchInput} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
