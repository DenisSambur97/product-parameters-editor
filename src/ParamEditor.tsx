import React, { Component } from 'react';

interface Param {
    id: number;
    name: string;
    type: 'string';
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
    onParamChange: (paramId: number, value: string) => void;
}

interface State {
    paramValues: ParamValue[];
}

class ParamEditor extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            paramValues: props.model.paramValues
        };
    }

    handleParamValueChange = (paramId: number, value: string) => {
        const { paramValues } = this.state;
        const updatedParamValues = paramValues.map(param => {
            if (param.paramId === paramId) {
                return { ...param, value };
            }
            return param;
        });
        this.setState({ paramValues: updatedParamValues });
        this.props.onParamChange(paramId, value);
    };

    getModel = () => {
        return { paramValues: this.state.paramValues };
    };

    render() {
        const { params } = this.props;
        const { paramValues } = this.state;

        return (
            <div>
                <h2>Редактор параметров</h2>
                {params.map(param => (
                    <div key={param.id}>
                        <label>{param.name}:</label>
                        <input
                            type="text"
                            value={paramValues.find(pv => pv.paramId === param.id)?.value || ''}
                            onChange={(e) => this.handleParamValueChange(param.id, e.target.value)}
                        />
                    </div>
                ))}
                <button onClick={() => console.log(this.getModel())}>Get Model</button>
            </div>
        );
    }
}

export default ParamEditor;
