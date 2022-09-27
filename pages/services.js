import Image from "next/image";
import styles from "../styles/Home.module.css";
import mainBG from "../images/dinning-table.jpg";
import apartment from "../images/bg-main.jpg";
import modern_light from "../images/modern-light.jpg";
import restaurant from "../images/restaurant.jpg";
import gym from "../images/gym.jpg";
import sauna from "../images/sauna.jpg";
import spa from "../images/spa.jpg";
import SPT_restaurant from "../images/Souphattra Restaurant.jpg";
import cigar from "../images/cigar bar.jpg";
import lobby from "../images/lobby bar.jpg";
import bedroom from "../images/one-room-suit.jpg";
import bedroom2 from "../images/two-room-suit.jpg";
import bedroom3 from "../images/three-room-suit.jpg";
import coconut from "../images/bg-coconut.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import scrollWhile from "./menu_navbar/scrollWhite";
("./menu_navbar/scrollWhite");
import Link from "next/link";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Service() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });

    {
      scrollWhile();
    }

    document.querySelector(".Comps_logo_black__PFiee").style.display = "none";
  }, []);

  useEffect(() => {
    const container = document.querySelector(".Home_containerMain__wLP1Y");
    const header = document.querySelector(".Comps_fix__8yk6q");

    // console.log(container);
    document.addEventListener("scroll", () => {
      container.style.transform = `translateY(${window.scrollY * 0.7}px)`;
    });
  });

  const mainSlide = ["/sv1.jpg", "/sv2.jpg", "/pool.jpg"];

  return (
    <>
      <div className={styles.bg}>
        <div className="main-cover">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
          >
            {mainSlide.map((s) => {
              return (
                <>
                  <div className={styles.bgImg}>
                    <Image alt="/" src={s} width="1000" height="1000" />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
        <div className={styles.blur}>
          <div className={styles.containerMain}>
            <div className={styles.bg_main}>
              <div className={styles.content_main}>
                <div className={styles.adj}>
                  Services<br></br>
                  by Souphattra Serviced Apartments, Vientiane
                </div>
                <div className={styles.row_line}></div>
                <div className={styles.scroll}>
                  <p>SCROLL TO EXPLORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave">
          <Image
            alt=""
            src="/bg-wave.png"
            layout="fill"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>

      <div className={[styles.bg_coconut].join(" ")}>
        <div className={styles.container}>
          <div className={[styles.flex, styles.mg50].join(" ")}>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className={[styles.leftFlexService]}
            >
              <h3 className={[styles.fontGold, styles.monoFont].join(" ")}>
                SOUPHATTRA APARTMENTS OFFERS A SUPERB SELECTION OF FACILITIES
                FOR GUESTS TO ENJOY DURING THEIR STAY
              </h3>
              <p className={styles.mg}>
                A stay at Souphattra Serviced Apartments is a chance to unwind
                after a busy day. Whether it’s for a refreshing post-work dip in
                our stylish pool, a calming treatment in the Souphattra Spa, or
                a cocktail and dinner in our elegantly designed bar &
                restaurant, you can rest assured that relaxation awaits.
              </p>
              <div
                className={[
                  styles.bg,
                  styles.spanUnset,
                  ,
                  styles.underPicServices,
                ].join(" ")}
              >
                <Image alt="/" src={apartment} width="1000" height="650" />
              </div>
            </div>
            <div
              className={[styles.rightFlex, styles.rightFlexService].join(" ")}
            >
              <div
                className={[styles.inheritImg, styles.picServices].join(" ")}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <Image alt="/" src={modern_light} width="1000" height="510" />
              </div>

              <div
                className={[
                  styles.inheritImg,
                  styles.underPicServices,
                  styles.mgTop20,
                ].join(" ")}
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <Image alt="/" src={restaurant} width="1000" height="670" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.create_space}></div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <div className={[styles.flex_service]}>
          <div className={[styles.imgScale, styles.posrelative].join(" ")}>
            <div
              className={[
                styles.inheritImg,
                styles.height100,
                styles.posrelative,
                styles.z100,
              ].join(" ")}
            >
              <Image alt="/" src={gym} width="1000" height="730" />
              <div className={styles.fontInPic}>
                <h3>Pool & Gym</h3>
              </div>
            </div>
            <div
              className={[
                styles.pdInSlidePic,
                styles.posrelative,
                styles.wd100,
              ].join(" ")}
            >
              <h1>Pool & Gym</h1>
              <p className={[styles.mg].join(" ")}>
                Our secluded pool, nestled into a private mezzanine location,
                offers a comfortable place to relax and recharge in the cool
                refreshing water.<br></br> For more active guests, a
                fully-equipped gym is located overlooking the pool.
              </p>
            </div>
            <div className={[styles.btnUnderSlidePic].join(" ")}>
              <Link href="/gallery?tab=tab5">
                <button className={styles.btn_absolute}>Explore more</button>
              </Link>
            </div>
          </div>

          <div className={[styles.imgScale, styles.posrelative].join(" ")}>
            <div
              className={[
                styles.inheritImg,
                styles.height100,
                styles.posrelative,
                styles.z100,
              ].join(" ")}
            >
              <Image width="1000" height="730" alt="/" src={sauna} />
              <div className={styles.fontInPic}>
                <h3>Steam and Sauna </h3>
              </div>
            </div>
            <div
              className={[
                styles.pdInSlidePic,
                styles.posrelative,
                styles.wd100,
              ].join(" ")}
            >
              <h1>Steam and Sauna </h1>
            </div>
            <div className={[styles.btnUnderSlidePic].join(" ")}>
              <Link href="/gallery?tab=tab5_2">
                <button className={styles.btn_absolute}>Explore more</button>
              </Link>
            </div>
          </div>
          <div className={[styles.imgScale, styles.posrelative].join(" ")}>
            <div
              className={[
                styles.inheritImg,
                styles.height100,
                styles.posrelative,
                styles.z100,
              ].join(" ")}
            >
              <Image width="1000" height="730" alt="/" src={spa} />
              <div className={styles.fontInPic}>
                <h3>Souphattra Spa</h3>
              </div>
            </div>
            <div
              className={[
                styles.pdInSlidePic,
                styles.posrelative,
                styles.wd100,
              ].join(" ")}
            >
              <h1>Souphattra Spa</h1>
              <p className={[styles.mg].join(" ")}>
                The Souphattra Spa provides a tranquil and calming space in
                which to delight in our specially designed treatments, leaving
                you feeling relaxed and revitalized.
              </p>
            </div>
            <div className={[styles.btnUnderSlidePic].join(" ")}>
              <Link href="/gallery?tab=tab5_3">
                <button className={styles.btn_absolute}>Explore more</button>
              </Link>
            </div>
          </div>
          <div className={[styles.imgScale, styles.posrelative].join(" ")}>
            <div
              className={[
                styles.inheritImg,
                styles.height100,
                styles.posrelative,
                styles.z100,
              ].join(" ")}
            >
              <Image width="1000" height="730" alt="/" src={SPT_restaurant} />
              <div className={styles.fontInPic}>
                <h3>Souphattra Restaurant </h3>
              </div>
            </div>
            <div
              className={[
                styles.pdInSlidePic,
                styles.posrelative,
                styles.wd100,
              ].join(" ")}
            >
              <h1>Souphattra Restaurant </h1>
              <p className={[styles.mg].join(" ")}>
                Our restaurant is a destination in itself, offering a range of
                cuisines both International and Lao, served in a beautiful and
                elegant setting
              </p>
            </div>
            <div className={[styles.btnUnderSlidePic].join(" ")}>
              <Link href="/gallery?tab=tab5_4">
                <button className={styles.btn_absolute}>Explore more</button>
              </Link>
            </div>
          </div>
          <div className={[styles.imgScale, styles.posrelative].join(" ")}>
            <div
              className={[
                styles.inheritImg,
                styles.height100,
                styles.posrelative,
                styles.z100,
              ].join(" ")}
            >
              <Image width="1000" height="730" alt="/" src={cigar} />
              <div className={styles.fontInPic}>
                <h3>Cigar Bar</h3>
              </div>
            </div>
            <div
              className={[
                styles.pdInSlidePic,
                styles.posrelative,
                styles.wd100,
              ].join(" ")}
            >
              <h1>Cigar Bar</h1>
              <p className={[styles.mg].join(" ")}>
                The Souphattra Cigar Bar is an elegant and welcoming place in
                which to kick back and enjoy a drink in one of the comfortable
                chairs.
              </p>
            </div>
            <div className={[styles.btnUnderSlidePic].join(" ")}>
              <Link href="/gallery?tab=tab5_5">
                <button className={styles.btn_absolute}>Explore more</button>
              </Link>
            </div>
          </div>
          <div className={[styles.imgScale, styles.posrelative].join(" ")}>
            <div
              className={[
                styles.inheritImg,
                styles.height100,
                styles.posrelative,
                styles.z100,
              ].join(" ")}
            >
              <Image width="1000" height="730" alt="/" src={lobby} />
              <div className={styles.fontInPic}>
                <h3>Lobby Bar </h3>
              </div>
            </div>
            <div
              className={[
                styles.pdInSlidePic,
                styles.posrelative,
                styles.wd100,
              ].join(" ")}
            >
              <h1>Lobby Bar </h1>
            </div>
            <div className={[styles.btnUnderSlidePic].join(" ")}>
              <Link href="/gallery?tab=tab5_6">
                <button className={styles.btn_absolute}>Explore more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.create_space}></div>

      <div className={styles.container}>
        <div className={[styles.textCenter, styles.mg50].join(" ")}>
          <h1
            className={styles.fontGold}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Discover The Apartments
          </h1>
          <div
            className={[styles.flexend, styles.mg50, styles.wd100].join(" ")}
          >
            <div
              className={[styles.bg, styles.bgImg, styles.discoverLeft].join(
                " "
              )}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <Image
                alt="bedroom"
                className={styles.unpos}
                src={bedroom}
                width={1000}
                height={800}
              />
              <div className={styles.hover}>
                <div>
                  <h1>One Bedroom Suite</h1>
                  <p>Size: 82 sqm</p>
                  <Link href="/rooms/oneBedRooms">
                    <button className={styles.btn_in_hover}>
                      VIEW DETAILS
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.discoverRight}>
              <div
                className={[
                  styles.bg,
                  styles.bgImg,
                  styles.discoverRightImg,
                ].join(" ")}
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <Image
                  className={styles.unpos}
                  alt="bedroom"
                  src={bedroom2}
                  width={1000}
                  height={400}
                />
                <div className={styles.hover}>
                  <div>
                    <h1>Two Bedroom Suite</h1>
                    <p>Size: 114 sqm</p>
                    <Link href="/rooms/twoBedRooms">
                      <button className={styles.btn_in_hover}>
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className={[
                  styles.bg,
                  styles.bgImg,
                  styles.discoverRightTop,
                  styles.discoverRightImg,
                ].join(" ")}
                data-aos="fade-left"
                data-aos-duration="2500"
              >
                <Image alt="/" src={bedroom3} height={400} width={1000} />
                <div className={styles.hover}>
                  <div>
                    <h1>Three Bedroom Suite</h1>
                    <p>Size: 147 sqm</p>
                    <Link href="/rooms/threeBedRooms">
                      <button className={styles.btn_in_hover}>
                        VIEW DETAILS
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
