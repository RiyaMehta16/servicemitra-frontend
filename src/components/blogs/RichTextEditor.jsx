import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

/**
 * RichTextEditor component using Quill 2.0.3
 * - Prevents double toolbar by guarding initialization
 * - Cleans up on unmount to avoid stale instances
 * - Syncs external value updates
 */
const RichTextEditor = ({ value, onChange }) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  // Initialize Quill once and clean up properly
  useEffect(() => {
    // Prevent re-initialization (e.g., React Strict Mode double mount)
    if (!editorRef.current || quillRef.current) return;

    // Create Quill instance
    const quill = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link"],
          ["clean"],
        ],
      },
      formats: [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "link",
      ],
    });

    // Store reference
    quillRef.current = quill;

    // Propagate content changes
    quill.on("text-change", () => {
      onChange(quill.root.innerHTML);
    });

    // Set initial content
    if (value) {
      quill.root.innerHTML = value;
    }

    // Cleanup on unmount
    return () => {
      quill.off("text-change");
      if (editorRef.current) {
        editorRef.current.innerHTML = "";
      }
      quillRef.current = null;
    };
  }, []);

  // Sync with external value updates
  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value;
    }
  }, [value]);

  return <div ref={editorRef} />;
};

export default RichTextEditor;
