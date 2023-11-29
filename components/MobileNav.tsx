import { useState } from 'react';
import Link from 'next/link';
import headerNavLinks from '@/data/headerNavLinks';
import { getTheme } from '@/lib/theme';

const MobileNav: React.FC = () => {
  const [navShow, setNavShow] = useState(false);

  let theme = getTheme();
  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        {theme === 'halloween' ? (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 30 30"
        fill="currentColor"
        className="text-primary-900 "
        xmlSpace="preserve"
      >
        <g id="Pompkin">
          <g>
            <g>
              <path d="M13.5,10.5c-0.276,0-0.5-0.224-0.5-0.5V7.083c0-1.744,0.792-3.14,2.172-3.831l2.797-1.907 c0.188-0.126,0.437-0.113,0.607,0.035c0.171,0.147,0.222,0.391,0.125,0.595c-0.198,0.414-0.299,0.815-0.299,1.194 c0,0.564,0.123,1.071,0.336,1.392c0.084,0.126,0.106,0.285,0.06,0.43S18.643,5.251,18.5,5.305l-0.322,0.123 C17.112,5.703,16,6.743,16,7.433V9c0,0.276-0.224,0.5-0.5,0.5S15,9.276,15,9V7.433c0-1.174,1.36-2.448,2.626-2.882 c-0.146-0.403-0.224-0.876-0.224-1.382c0-0.078,0.003-0.157,0.009-0.235l-1.734,1.179C14.59,4.661,14,5.731,14,7.083V10 C14,10.276,13.776,10.5,13.5,10.5z" />
            </g>
            <g>
              <path d="M19.413,29.998c-1.672,0-3.33-0.422-4.812-1.224c-1.43,0.801-3.03,1.224-4.645,1.224C4.466,29.998,0,25.266,0,19.45 S4.466,8.903,9.957,8.903c1.177,0,2.334,0.221,3.445,0.656c1.78-1.307,3.852-1.996,6.011-1.996C25.25,7.563,30,12.595,30,18.78 C30,24.966,25.25,29.998,19.413,29.998z M14.597,27.699c0.086,0,0.173,0.022,0.25,0.067c1.393,0.806,2.972,1.231,4.565,1.231 c5.286,0,9.587-4.583,9.587-10.218c0-5.634-4.301-10.217-9.587-10.217c-2.03,0-3.977,0.678-5.63,1.961 c-0.143,0.112-0.336,0.137-0.503,0.065c-1.068-0.456-2.186-0.687-3.323-0.687C5.018,9.903,1,14.186,1,19.45 s4.018,9.548,8.957,9.548c1.53,0,3.045-0.424,4.383-1.228C14.419,27.723,14.508,27.699,14.597,27.699z" />
            </g>
            <g>
              <path d="M23.196,17h-6.305c-0.202,0-0.385-0.122-0.462-0.309c-0.078-0.187-0.035-0.402,0.108-0.545l3.783-3.783 c0.106-0.105,0.251-0.157,0.403-0.144c0.149,0.015,0.284,0.096,0.367,0.22l2.522,3.783c0.102,0.153,0.112,0.351,0.025,0.513 S23.38,17,23.196,17z M18.098,16h4.164l-1.666-2.498L18.098,16z" />
            </g>
            <g>
              <path d="M13.109,17H7.435c-0.173,0-0.334-0.09-0.425-0.237s-0.1-0.332-0.022-0.486l1.892-3.783 c0.072-0.144,0.208-0.244,0.367-0.27c0.161-0.025,0.32,0.026,0.434,0.14l3.783,3.783c0.143,0.143,0.186,0.358,0.108,0.545 C13.494,16.878,13.311,17,13.109,17z M8.244,16h3.658l-2.439-2.438L8.244,16z" />
            </g>
            <g>
              <path d="M15.696,26.215c-1.231,0-1.696-0.05-1.696-0.584V25h-2v0.212c0,0.159-0.076,0.309-0.204,0.403 c-0.129,0.095-0.294,0.123-0.445,0.074c-3.142-0.984-5.37-3.179-6.322-4.759c-0.101-0.167-0.095-0.378,0.015-0.539 c0.109-0.162,0.304-0.244,0.496-0.212l1.264,0.206c1.056,0.171,2.081,0.336,2.799,0.484c0.096,0.02,0.181,0.066,0.247,0.131H11.5 c0.196,0,0.366,0.113,0.448,0.277c0.975,0.095,2.39,0.156,3.683,0.156c0.777,0,1.707-0.033,2.84-0.101 c0.139-0.005,0.273,0.041,0.373,0.135C18.943,21.561,19,21.693,19,21.831V23h1v-1.441c0-0.25,0.184-0.461,0.431-0.495 c1.371-0.191,2.634-0.425,3.749-0.631c0.5-0.093,0.968-0.18,1.398-0.253c0.192-0.034,0.388,0.049,0.498,0.21 c0.11,0.162,0.116,0.373,0.015,0.541C25.344,22.17,22.386,26.215,15.696,26.215z M15,25.19c0.215,0.014,0.482,0.025,0.696,0.025 c4.894,0,7.601-2.315,8.849-3.833c-0.061,0.011-0.122,0.022-0.183,0.034c-1.008,0.187-2.136,0.396-3.361,0.577V23.5 c0,0.276-0.224,0.5-0.5,0.5h-2c-0.276,0-0.5-0.224-0.5-0.5v-1.14c-0.918,0.049-1.698,0.073-2.37,0.073 c-1.536,0-3.182-0.081-4.192-0.206c-0.152-0.019-0.282-0.105-0.36-0.227H9.5c-0.169,0-0.319-0.084-0.409-0.212 c-0.677-0.129-1.551-0.271-2.448-0.416L6.567,21.36C7.521,22.5,9.037,23.75,11,24.508V24.5c0-0.276,0.224-0.5,0.5-0.5h3 c0.276,0,0.5,0.224,0.5,0.5V25.19z" />
            </g>
            <g>
              <path d="M13.124,9.743c-0.042,0-0.085-0.005-0.127-0.017c-1.132-0.297-3.43-1.588-5.412-3.148 C7.067,7.049,6.371,7.302,5.543,7.302C0.086,7.302,0.001,4.407,0,4.284C-0.002,4.008,0.22,3.782,0.496,3.78 C0.781,3.781,0.999,4,1,4.276c0.003,0.074,0.144,2.026,4.543,2.026c0.515,0,0.936-0.124,1.26-0.369 C5.489,4.794,4.43,3.57,4.145,2.514c-0.245-0.904,0.099-1.489,0.43-1.82c0.723-0.724,1.572-0.887,2.329-0.45 C8.17,0.975,8.919,3.336,8.446,5.103c-0.065,0.242-0.15,0.466-0.255,0.671c1.824,1.441,3.972,2.699,5.059,2.985 c0.267,0.07,0.427,0.343,0.356,0.61C13.548,9.594,13.346,9.743,13.124,9.743z M6.036,1.001c-0.2,0-0.449,0.094-0.754,0.399 c-0.147,0.147-0.3,0.378-0.172,0.852c0.221,0.816,1.128,1.853,2.284,2.861C7.426,5.028,7.455,4.938,7.48,4.844 c0.382-1.427-0.284-3.277-1.077-3.735C6.307,1.054,6.185,1.001,6.036,1.001z" />
            </g>
          </g>
        </g>
      </svg>    
        ): (
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-primary-700"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
        )}
      </button>
      <div
        className={`fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="mr-5 mt-11 h-8 w-8 rounded"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-primary-900"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link href={link.href}>
                <a
                  className="text-2xl font-bold tracking-widest text-primary-900"
                  onClick={onToggleNav}
                >
                  {link.title}
                </a>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;