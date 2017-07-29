import React from "react";

export function splitMap(string, separator, className) {
  if (string) {
    let list = string.split(separator).map((i, key) => {
      //warning  'list' is already defined  no-redeclare
      return (
        <div className={className} key={key}>
          {i}
        </div>
      );
    });
    return (
      <div>
        {list}
      </div>
    );
  }
}
