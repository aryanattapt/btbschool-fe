import { 
    BtnBold,
    BtnItalic,
    BtnUnderline,
    BtnBulletList,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnClearFormatting,
    Editor, 
    EditorProvider, 
    Toolbar
} from 'react-simple-wysiwyg';
  
const CustomEditor = ({ value, onChange, name }) => {
    return (
      <EditorProvider>
        <Editor value={value?.toString('html')} onChange={onChange} name={name}>
          <Toolbar>
            <BtnBold />
            <BtnItalic />
            <BtnUnderline/>
            <BtnBulletList/>
            <BtnNumberedList/>
            <BtnStrikeThrough/>
            <BtnClearFormatting/>
          </Toolbar>
        </Editor>
      </EditorProvider>
    );
}

export default CustomEditor;