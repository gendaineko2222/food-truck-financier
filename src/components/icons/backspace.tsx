export default function BackSpaceIcon(
  props: React.SVGProps<SVGSVGElement> & {
    variant: "outline" | "fill";
    color?: string;
  }
) {
  if (props.variant == "outline") {
    return (
      <svg
        version="1.1"
        id="_x32_"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        {...props}
      >
        <g>
          <polygon
            points="367.375,183.607 312.486,238.495 257.592,183.607 240.087,201.105 294.982,256 240.087,310.894 
		257.592,328.393 312.486,273.498 367.375,328.393 384.88,310.894 329.985,256 384.88,201.105"
            fill={props.color}
          />
          <path
            d="M448.376,60.557h-251.76c-23.23,0-45.327,10.07-60.573,27.608L7.448,236.082C2.5,241.76-0.007,248.92,0,256
		c-0.007,7.08,2.5,14.234,7.448,19.918l128.596,147.931c15.252,17.532,37.342,27.594,60.573,27.594h251.76
		c35.144-0.014,63.617-28.48,63.624-63.624V124.187C511.993,89.036,483.52,60.563,448.376,60.557z M484.539,387.819
		c-0.007,10.03-4.03,18.98-10.593,25.57c-6.591,6.564-15.541,10.579-25.57,10.593h-251.76c-15.286,0-29.82-6.624-39.85-18.155
		L28.178,257.904c-0.496-0.577-0.711-1.2-0.718-1.904c0.006-0.704,0.221-1.327,0.71-1.891l128.602-147.923
		c10.03-11.545,24.564-18.168,39.844-18.168h251.76c10.03,0.007,18.98,4.022,25.57,10.593c6.563,6.583,10.586,15.54,10.593,25.576
		V387.819z"
            fill={props.color}
          />
        </g>
      </svg>
    );
  }
  return (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      {...props}
    >
      <g>
        <path
          d="M459.279,63.989H193.251c-20.346,0-39.7,8.82-53.054,24.186L4.314,244.473c-5.752,6.61-5.752,16.443,0,23.06
		l135.883,156.306c13.354,15.359,32.708,24.172,53.054,24.172h266.028c29.116,0,52.721-23.605,52.721-52.721V116.716
		C512,87.593,488.395,63.989,459.279,63.989z M360.581,338.701l-51.687-51.672l-51.672,51.658l-31.03-31.015l51.673-51.687
		L226.2,204.32l31.022-31.022l51.672,51.673l51.679-51.687l31.022,31.036l-51.687,51.679l51.701,51.673L360.581,338.701z"
          fill={props.color}
        ></path>
      </g>
    </svg>
  );
}
