function CheckCircle() {
  return(
    <svg id="check-circle" viewBox="0 0 30 30" width="20" height="20">
      <defs>
        <style dangerouslySetInnerHTML={{__html: "\n .check-circle-1{fill:none;stroke:#fff;stroke-linecap:square;stroke-miterlimit:10;stroke-width:3px;}.check-circle-2{fill:#1ad494;}\n " }} />
      </defs>
      <circle className="check-circle-2" cx={15} cy={15} r={12} />
      <line className="check-circle-1" x1="9.75" y1="14.5" x2="13.75" y2="18.5" />
      <line className="check-circle-1" x1="13.75" y1="18.5" x2="20.25" y2={12} />
    </svg>
  );
};

export default CheckCircle;