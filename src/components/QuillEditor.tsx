import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
interface Props {
  content: any[];
}

const QuillEditor: React.FC<Props> = ({ content }) => {
  const htmlContent = content.map((item) => {
    let paragraph = "";
    item.children.forEach((child: any) => {
      if (child.bold) {
        paragraph += `<b>${child.text}</b>`;
      } else if (child.italic) {
        paragraph += `<i>${child.text}</i>`;
      } else {
        paragraph += child.text;
      }
      paragraph += "<br>";
    });
    return `<p>${paragraph}</p>`;
  });

  return (
    <div className="space-y-4">
      {htmlContent.map((html, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: html }}
          className="whitespace-pre-wrap"
        />
      ))}
    </div>
  );
};

export default QuillEditor;