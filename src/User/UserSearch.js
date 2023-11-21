import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UserSearch.css";
import UserSearchInput from "./UserSearchInput";
import { async } from "q";
import { locationSearch } from "../apis/Search";

const { kakao } = window;

const UserSearch = () => {
  const [showInput, setShowInput] = useState(false);
  const [map, setMap] = useState(null);
  const [showMarker, setShowMarker] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [mapCenter, setMapCenter] = useState(null);

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

      kakao.maps.event.addListener(newMap, "center_changed", () => {
        const center = newMap.getCenter();
        setMapCenter({ lat: center.getLat(), lng: center.getLng() });
      });

      // 마커 및 오버레이 로직
      showMarker.forEach((markerData) => {
        var marker = new kakao.maps.Marker({
          map: newMap, // 여기서 newMap 사용
          position: markerData.latlng,
          image: markerImage,
        });
        var content = // 마커 클릭시 표시될 오버레이 내용
          '<div class="wrap">' +
          '    <div class="info">' +
          '        <div class="title">' +
          markerData.title +
          '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
          "        </div>" +
          '        <div class="body">' +
          '            <div class="img">' +
          `                <img src="${markerData.image}" width="73" height="70">` +
          "           </div>" +
          '            <div class="desc">' +
          `                <div class="ellipsis">${markerData.address}</div>` +
          `                <div class="jibun ellipsis">운영 시간: ${markerData.startTime} ~ ${markerData.endTime}</div>` +
          `                <div class="ellipsis">전화번호: ${markerData.phoneno}</div>` +
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          if (map) {
            map.setCenter(new kakao.maps.LatLng(lat, lon));
          } else {
            console.error("Error: map is not initialized");
          }
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };
  const handleSearchInCurrentMap = () => {
    if (mapCenter) {
      locationSearch(mapCenter.lat, mapCenter.lng)
        .then((response) => {
          const { locations, searchCafes } = response.data.data;
          const markersData = locations.map((location, index) => {
            const cafeInfo = searchCafes.find(
              (cafe) => cafe.cafeName === location.cafeName
            );
            return {
              title: location.cafeName,
              address: cafeInfo ? cafeInfo.address : "주소 정보 없음",
              startTime: cafeInfo ? cafeInfo.startTime : "시작 시간 정보 없음",
              endTime: cafeInfo ? cafeInfo.endTime : "종료 시간 정보 없음",
              phoneno: location.cafeTel,
              latlng: new kakao.maps.LatLng(
                location.latitude,
                location.longtitude
              ),
              image: location.cafeReqImg,
            };
          });
          setShowMarker(markersData);
        })
        .catch((error) => {
          console.error("Location search error:", error);
        });
    } else {
      console.error("No center coordinate available for the map");
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
            <button onClick={handleSearchInCurrentMap} className="map_button1">
              현 지도에서 검색
            </button>
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
