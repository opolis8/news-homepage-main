import "./feed.scss";
import cover from "/images/image-web-3-desktop.jpg";

const Feed = () => {
  return (
    <>
      <div className="feed">
        <div className="container">
          <div className="top-container">
            <div className="left">
              <div className="cover"></div>
              <div className="details">
                <div className="left-details">
                  {" "}
                  <p>The Bright Future of Web 3.0?</p>
                </div>
                <div className="right-details">
                  <p>
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button>READ MORE</button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title" id="new">
                {" "}
                New{" "}
              </div>
              <div className="content">
                <p>
                  <span>Hydrogen VS Electric Cars</span> Will hydrogen-fueled
                  cars ever catch up to EVs?
                </p>
                <p>
                  <span>The Downsides of AI Artistry</span> What are the
                  possible adverse effects of on-demand AI image generation?
                </p>
                <p>
                  <span>Is VC Funding Drying Up?</span> Private funding by VC
                  firms is down 50% YOY. We take a look at what that means.
                </p>
              </div>
            </div>
          </div>

          <div className="buttom-container">
            <div className="buttom-info">
              <img src="/images/image-retro-pcs.jpg" alt="retro imag" />
              <div className="details" id="popular">
                <span>01</span>
                <p className="detail-title">Reviving Retro PCs</p>
                <p className="description">
                  What happens when old PCs are given modern upgrades?
                </p>
              </div>
            </div>
            <div className="buttom-info">
              <img src="/images/image-top-laptops.jpg" alt="retro imag" />
              <div className="details">
                <span>02</span>
                <p className="detail-title">Top 10 Laptops of 2022</p>
                <p className="description">
                  Our best picks for various needs and budgets.
                </p>
              </div>
            </div>
            <div className="buttom-info">
              <img src="/images/image-gaming-growth.jpg" alt="retro imag" />
              <div className="details">
                <span>03</span> <p className="detail-title">Growth of Gaming</p>
                <p className="description">
                  The How the pandemic has sparked fresh opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
