import Layout from "../../component/Layout";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./WorkOutVideo.css";

const WorkOutVideo = () => {
  return (
    <Layout>
      <div className="yoga">
        <div className="container">
          <div className="title">YOGA</div>
          <OwlCarousel items={4} className="owl-theme" loop nav margin={8}>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=qFgwrTc1e1I&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/qFgwrTc1e1I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD72pqdNxlpctog2y_HZly1rO2gPw"
                    alt="yoga 1"
                  />
                </a>
              </div>
              <div className="sub-title-video">Full body 15 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=0Csrx8r6FAs&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/0Csrx8r6FAs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ5Cvf7kESP87emH3TD_pUB9--Vg"
                    alt="yoga 2"
                  />
                </a>
              </div>
              <div className="sub-title-video">Full body 45 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=kRxclhGDZtQ&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/kRxclhGDZtQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNyxIaKuYsBWYGd4amfeeJZFPvWQ"
                    alt="yoga 3"
                  />
                </a>
              </div>
              <div className="sub-title-video">Energy 15 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=dXFoauG-sbc&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=13"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/dXFoauG-sbc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoV_uHqOssgCIhUN_a_MDhV1z_VA"
                    alt="yoga 4"
                  />
                </a>
              </div>
              <div className="sub-title-video">Slow down 30 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=hpCXz7taG2s&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/hpCXz7taG2s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaDn6SespeRGC4pgysO3Z49nWEIg"
                    alt="yoga 5"
                  />
                </a>
              </div>
              <div className="sub-title-video">Detox yoga 35 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=xUHza6YKRfk&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/xUHza6YKRfk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOOnrXqE86k2hz_cqFv63b8f7z2g"
                    alt="yoga 6"
                  />
                </a>
              </div>
              <div className="sub-title-video">Slow yoga 24 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=dJxnU9sOh6Q&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/dJxnU9sOh6Q/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSwNWT93Lx9ojYHg-8LyCa1N74pA"
                    alt="yoga 7"
                  />
                </a>
              </div>
              <div className="sub-title-video">Morning yoga 15 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=xOJeRLc66r4&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/xOJeRLc66r4/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB55ptwqa4pesk3lPYCmEjXjdS12A"
                    alt="yoga 8"
                  />
                </a>
              </div>
              <div className="sub-title-video">Yoga 15 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=X2GxGhOcjQ0&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/X2GxGhOcjQ0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCYyrv8Mjgveptstcpp9xJUDSdUzg"
                    alt="yoga 9"
                  />
                </a>
              </div>
              <div className="sub-title-video">Strong yoga 20 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=oj-hxr2bZkI&list=PL-G7EJFoxFcf6HrRVJvNNTI36VYsueV1o&index=30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/oj-hxr2bZkI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBs6Ur7u25Q5onX4CmYAoqLUz7HfQ"
                    alt="yoga 10"
                  />
                </a>
              </div>
              <div className="sub-title-video">Yoga 60 minutes</div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      <div className="Abs">
        <div className="container">
          <div className="title">ABS</div>
          <OwlCarousel items={4} className="owl-theme" loop nav margin={8}>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=QouI9Lx1QxQ&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/QouI9Lx1QxQ/hqdefault.jpg"
                    alt="abs 1"
                  />
                </a>
              </div>
              <div className="sub-title-video">10 Min Abs Workout</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=LJolQLvWMro&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/LJolQLvWMro/hqdefault.jpg"
                    alt="abs 2"
                  />
                </a>
              </div>
              <div className="sub-title-video">KILLER Six Pack Abs Workout</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=urBJkOFnKVc&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/urBJkOFnKVc/hqdefault.jpg"
                    alt="abs 3"
                  />
                </a>
              </div>
              <div className="sub-title-video">No Equipment, No Repeats</div>
            </div>




            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=Bv-yhwuuiUE&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/Bv-yhwuuiUE/hqdefault.jpg"
                    alt="abs 4"
                  />
                </a>
              </div>
            
              <div className="sub-title-video">6 Pack Abs Starter Series</div>
            </div>




            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=aiqHkfrFPqY&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/aiqHkfrFPqY/hqdefault.jpg"
                    alt="abs 5"
                  />
                </a>
              </div>
              <div className="sub-title-video"> 10 MIN INTENSE ABS WORKOUT</div>
            </div>




            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=qcJwU7zklMM&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/qcJwU7zklMM/hqdefault.jpg"
                    alt="abs 6"
                  />
                </a>
              </div>
              <div className="sub-title-video">10 Min Killer Ab Challenge</div>
            </div>





            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=0aMpXsHbRFs&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/0aMpXsHbRFs/hqdefault.jpg"
                    alt="abs 7"
                  />
                </a>
              </div>
              <div className="sub-title-video">10 Min 6 Pack Revolution</div>
            </div>





            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=PbjKPEkf6T4&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/PbjKPEkf6T4/hqdefault.jpg"
                    alt="abs 8"
                  />
                </a>
              </div>
              <div className="sub-title-video">10 Min 6 Pack Blueprint </div>
            </div>




            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=F58b36ec4xw&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/F58b36ec4xw/hqdefault.jpg"
                    alt="abs 9"
                  />
                </a>
              </div>
              <div className="sub-title-video">10 Min Intense Home Abs Blast</div>
            </div>




            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=b_5KZ3tTYBE&list=PL2NpXBzdtNal5gczpuT4qpAHNGGn7nWhl&index=10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/b_5KZ3tTYBE/hqdefault.jpg"
                    alt="abs 10"
                  />
                </a>
              </div>
              <div className="sub-title-video">10 Min Sixpack Shaper</div>
            </div>




          </OwlCarousel>
        </div>
      </div>
      <div className="pilates">
        <div className="container">
          <div className="title">PILATES</div>
          <OwlCarousel items={4} className="owl-theme" loop nav margin={8}>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=sT8_on7u3d0&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/sT8_on7u3d0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB9hwsWp1ZdS--YsZWoABcQdyN94Q"
                    alt="pilates 1"
                  />
                </a>
              </div>
              <div className="sub-title-video">Pilates burn 10 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=pphNXtZhMqk&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/pphNXtZhMqk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAwpStThJbOIWacbpAu-cJJxFsEiA"
                    alt="pilates 2"
                  />
                </a>
              </div>
              <div className="sub-title-video">Strong & Toned 10 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=Y9_sb1dFLK4&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/Y9_sb1dFLK4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLA4QOu5KZRoDgWDW-aB9qvFFugypw"
                    alt="pilates 3"
                  />
                </a>
              </div>
              <div className="sub-title-video">Pilates abs 10 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=ct6Z0nlqb5Y&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/ct6Z0nlqb5Y/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCl5fBrp0bkLs4_iQshFgRE2KKQFg"
                    alt="pilates 4"
                  />
                </a>
              </div>
              <div className="sub-title-video">Full body burn 10 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=rFI51D3q678&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/rFI51D3q678/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAc3kLe6x8cTy7qnojPUzSLA3xHhw"
                    alt="pilates 5"
                  />
                </a>
              </div>
              <div className="sub-title-video">Lower body 10 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=V5HVWDwFeUg&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/V5HVWDwFeUg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBru8oQxBs6z1t4fM-5JNl42R2pnQ"
                    alt="pilates 6"
                  />
                </a>
              </div>
              <div className="sub-title-video">Full body 10 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=UjAZEBkQBiQ&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/UjAZEBkQBiQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBg4fQjRTXKKY8n4nY0QUVkqrwGmQ"
                    alt="pilates 7"
                  />
                </a>
              </div>
              <div className="sub-title-video">Strong & Defined 15 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=MM39i6PCVzo&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/MM39i6PCVzo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBvi6pL7421pumjOUSdA6Tli_Ixag"
                    alt="pilates 8"
                  />
                </a>
              </div>
              <div className="sub-title-video">Perfect burn 10 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=ycot1uCqeec&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/ycot1uCqeec/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLADiBR0yofA_tYXcV7AvnSkRXeP9w"
                    alt="pilates 9"
                  />
                </a>
              </div>
              <div className="sub-title-video">Lower body 15 minutes</div>
            </div>
            <div className="item">
              <div className="image-workout">
                <a
                  href="https://www.youtube.com/watch?v=McwsTgRiv60&list=PLYlEA5zVEdPFT0xTxFKBoLNOafGP_NRIJ&index=10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://i.ytimg.com/vi/McwsTgRiv60/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDWmb4J6poKfoMAK4ziBW77vb9p0Q"
                    alt="pilates 10"
                  />
                </a>
              </div>
              <div className="sub-title-video">Hourglass 15 minutes</div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </Layout>
  );
};

export default WorkOutVideo;
