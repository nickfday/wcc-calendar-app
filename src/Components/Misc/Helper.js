import React, { Component } from 'react';

export function splitMap(list, separator, className) {
  var list = list.split(separator).map((i, key) => {
    return (
      <div className={className} key={key}>{i}</div>
    )
  });
  return <div>{list}</div>
}