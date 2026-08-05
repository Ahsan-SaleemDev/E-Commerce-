"use client";

export default function AppBanner() {
  return (
    <div className="part-9">
      <div className="left">
        <div className="left-left">
          <img src="/images/recipes/banner01.png" alt="App" />
        </div>
        <div className="left-right">
          <h2>Make online shop easier with our Cartzilla App</h2>
          <div className="buttons">
            <div className="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.665 10.561l-3.251-1.878-3.329 3.329 3.328 3.329 3.263-1.884c.509-.309.812-.849.812-1.444s-.304-1.135-.823-1.451z" fill="#ffce00"></path>
                <path d="M13.085 12.011L4.018 2.879a1.71 1.71 0 0 0-.507 1.216v15.804a1.71 1.71 0 0 0 .507 1.217l9.067-9.105z" fill="#01daff"></path>
                <path d="M13.086 12.011l3.329-3.329.005-.005-4.46-2.568L6.08 2.654c-.529-.327-1.171-.338-1.712-.034a2.54 2.54 0 0 0-.349.259l9.067 9.132z" fill="#00f076"></path>
                <path d="M4.019 21.116c.113.101.225.18.349.259.27.146.552.225.834.225.304 0 .597-.09.867-.248l5.891-3.439 4.46-2.568-.005-.005-3.329-3.329-9.067 9.104z" fill="#f63448"></path>
              </svg>
              Google Play
            </div>
            <div className="button">
              <i className="ri-apple-fill"></i>
              App Store
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="right-left">
          <img src="/images/recipes/banner02.png" alt="Feedback" />
        </div>
        <div className="right-right">
          <h2>We'd love to hear what you think!</h2>
          <a href="">
            Give a feedback <i className="ri-arrow-right-s-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
