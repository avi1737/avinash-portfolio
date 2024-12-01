type highlightText = {
  text: string;
};

function HighlightText({ text }: highlightText) {
  return (
    <span className="text-green-400 font-nohemiBold text-[20px] lg:text-[32px]">
      {text}
    </span>
  );
}

export default HighlightText;
