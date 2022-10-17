import React, { forwardRef, useEffect, useRef, memo } from "react";

const TextArea = (
  {
    value,
    onChange,
    min_row,
    max_row,
    scroll_direction,
    className,
    row_height,
    ...rest
  },
  ref
) => {
  const text_area_ref = useRef();
  const extra_class = useRef("");

  useEffect(() => {
    if (text_area_ref.current.scrollHeight) {
      const scrollHeight = text_area_ref.current.scrollHeight;
      text_area_ref.current.style.height = scrollHeight + "px";
    }
    return () => {
      console.log("will this be runs");
    };
  }, [value]);

  console.log("new", extra_class.current);

  useEffect(() => {
    if (!!scroll_direction) extra_class.current += "resize ";
    if (!!row_height) extra_class.current += `leading-[${row_height}px] `;
  }, []);

  const min_height = min_row * row_height; //minimum height of the textarea
  const max_height = max_row * row_height; //maximum height of the textarea

  const getRef = (el) => {
    console.log({ el });
    text_area_ref.current = el;
    if (!!ref) ref.current = el;
  };

  // Dealing with Textarea Height
  function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    // let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    let newHeight = numberOfLineBreaks * row_height;
    console.log(!!max_row && newHeight > max_height);
    //if the newHeight is more than the maximumHeight then show the scrollbar
    if (!!max_row && newHeight > max_height) {
      extra_class += `overflow-y-auto text-lg`;
      console.log(extra_class.current);
    }

    return min_height > newHeight ? min_height : newHeight;
  }

  const overrideOnChange = (e) => {
    onChange(e);
    text_area_ref.current.style.height = calcHeight(e.target.value) + "px";
  };

  console.log("old", extra_class.current);

  return (
    <>
      <div>
        <textarea
          className={` ${className} ${extra_class} `}
          ref={getRef}
          onChange={overrideOnChange}
          value={value}
          rows={min_row}
          {...rest}
        />
      </div>
      <div></div>
    </>
  );
};

export default memo(forwardRef(TextArea));
