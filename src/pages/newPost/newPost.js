
import React, { useState } from "react";
import { NumberBox } from "devextreme-react/number-box";
import { SelectBox } from "devextreme-react/select-box";
import { Switch } from "devextreme-react/switch";
import { TextBox } from "devextreme-react/text-box";
import { Autocomplete } from "devextreme-react/autocomplete";
import { CheckBox } from "devextreme-react/check-box";
import { TextArea } from "devextreme-react/text-area";
import { TagBox } from "devextreme-react/tag-box";
import { europeanUnion } from "./data.js";
import Button from 'devextreme-react/button';

export const NewPost = () => {

  const [rtlEnabled, setRtlEnabled] = useState(false);
  const languages = [
    "Arabic: Right-to-Left direction",
    "English: Left-to-Right direction",
  ];
  let displayExpr = "nameEn";
   const [title, setTitle] = useState('');
   const [note, setNote] = useState('');
  
  const onLanguageChanged = (args) => {
    const isRTL = args.value === languages[0];
    setRtlEnabled({ rtlEnabled: isRTL });
    setTitle(isRTL ? "نص" : "text");
  }

  const addNewPost = () => {
    console.log('new post added', note );
    setTitle(note);
  }

  
    return (
      <div>
        <div className={rtlEnabled ? "dx-rtl" : null}>
          <div className="options">
            <div className="caption">Options</div>
            <div className="dx-fieldset">
              <div className="dx-field">
                <div className="dx-field-label">Language</div>
                <div className="dx-field-value">
                  <SelectBox
                    items={languages}
                    defaultValue={languages[1]}
                    rtlEnabled={rtlEnabled}
                    onValueChanged={onLanguageChanged}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="dx-fieldset">
            <div className="dx-field">
              <div className="dx-field-label">Text Box</div>
              <div className="dx-field-value">
                <TextBox
                  showClearButton={true}
                  value={title}
                  rtlEnabled={rtlEnabled}
                  onValueChanged={e => setTitle(e.value)}
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Number Box</div>
              <div className="dx-field-value">
                <NumberBox
                  showSpinButtons={true}
                  defaultValue="123"
                  rtlEnabled={rtlEnabled}
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Select Box</div>
              <div className="dx-field-value">
                <SelectBox
                  items={europeanUnion}
                  defaultValue={europeanUnion[0]}
                  rtlEnabled={rtlEnabled}
                  displayExpr={displayExpr}
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Tag Box</div>
              <div className="dx-field-value">
                <TagBox
                  items={europeanUnion}
                  defaultValue={[europeanUnion[0].id]}
                  rtlEnabled={rtlEnabled}
                  displayExpr={displayExpr}
                  placeholder="..."
                  valueExpr="id"
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Text Area</div>
              <div className="dx-field-value">
                <TextArea
                  rtlEnabled={rtlEnabled}
                  value={note}
                  onValueChanged = {e => setNote(e.value)}
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Autocomplete</div>
              <div className="dx-field-value">
                <Autocomplete
                  items={europeanUnion}
                  rtlEnabled={rtlEnabled}
                  valueExpr={displayExpr}
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Check Box</div>
              <div className="dx-field-value">
                <CheckBox
                  defaultValue={true}
                  text={title}
                  rtlEnabled={rtlEnabled}
                />
              </div>
            </div>
            <div className="dx-field">
              <div className="dx-field-label">Switch</div>
              <div className="dx-field-value">
                <Switch rtlEnabled={rtlEnabled} />
              </div>
            </div>
            <div className="dx-field">
              <Button
                text="Add Post"
                onClick={addNewPost}
              />
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default NewPost;
