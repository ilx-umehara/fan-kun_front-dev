function Incomplete() {
  return(
    <svg id="incomplete" viewBox="0 0 30 30" width="20" height="20">
      <defs>
        <style dangerouslySetInnerHTML={{__html: "\n .incomplete-1{fill:none;stroke:#fff;stroke-linecap:square;stroke-miterlimit:10;stroke-width:3px;}.incomplete-2{fill:#f4605e;}\n " }} />
      </defs>
      <circle className="incomplete-2" cx={15} cy={15} r={12} />
      <line className="incomplete-1" x1="11.75" y1="18.25" x2="18.25" y2="11.75" />
      <line className="incomplete-1" x1="18.25" y1="18.25" x2="11.75" y2="11.75" />
    </svg>
  );
};

export default Incomplete;