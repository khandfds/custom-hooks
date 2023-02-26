import { useDimension } from "./useDimension";
import "./Navigation.scss";

export const Navigation = ({
  forceMobileNavigationView,
}: {
  forceMobileNavigationView?: boolean;
}) => {
  const [parentSectionWidth, parentSectionRef] = useDimension<HTMLDivElement>();
  const [leftSectionWidth, leftSectionRef] = useDimension<HTMLAnchorElement>();
  const [centerSectionWidth, centerSectionRef] =
    useDimension<HTMLDivElement>(true);
  const [rightSectionWidth, rightSectionRef] = useDimension<HTMLDivElement>();

  const hasEnoughSpace =
    parentSectionWidth >
    centerSectionWidth + Math.max(leftSectionWidth, rightSectionWidth) * 2;

  const isDrawerMode = forceMobileNavigationView ? true : !hasEnoughSpace;

  return (
    <nav ref={parentSectionRef}>
      <div className="parent">
        <a className="left-child" ref={leftSectionRef}>
          Logo
        </a>
        <div
          ref={centerSectionRef}
          className={`${isDrawerMode ? "hidden" : ""} center-child `}
        >
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
        </div>
        <div ref={rightSectionRef}>
          <button>Link</button>
          <button>Link</button>
        </div>
      </div>
    </nav>
  );
};
