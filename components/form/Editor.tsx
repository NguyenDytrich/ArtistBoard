import { Editor, EditorState } from "draft-js";

const EditorWrapper: React.FC<{editorState: EditorState; onChange: (editorState: EditorState) => void}> = ({
  editorState,
  onChange
}) => {
  return <Editor editorState={editorState} onChange={onChange} />;
};

export default EditorWrapper;
