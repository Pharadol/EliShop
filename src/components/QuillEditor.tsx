import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
interface Props {
  content: any[]; // โครงสร้างข้อมูลจาก API
}

const QuillEditor: React.FC<Props> = ({ content }) => {
  // แปลงข้อมูลจาก API เป็นรูปแบบ HTML
  const htmlContent = content.map((item) => {
    let paragraph = "";
    item.children.forEach((child: any) => {
      if (child.bold) {
        paragraph += `<b>${child.text}</b>`; // ใช้ <b> เพื่อทำตัวหนา
      } else if (child.italic) {
        paragraph += `<i>${child.text}</i>`; // ใช้ <i> เพื่อทำตัวเอียง
      } else {
        paragraph += child.text;
      }
      paragraph += "<br>"; // เพิ่ม <br> เพื่อเว้นบรรทัดใน HTML
    });
    return `<p>${paragraph}</p>`;
  });

  return (
    <div className="space-y-4">
      {htmlContent.map((html, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: html }}
          className="whitespace-pre-wrap" // เพิ่ม CSS class เพื่อให้รักษาการเว้นบรรทัด
        />
      ))}
    </div>
  );
};

export default QuillEditor;