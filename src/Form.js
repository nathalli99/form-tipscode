import React, { Component } from 'react';

class Form extends Component {
    state = {
        nome: '',
        idade: '',
        endereco: '',
        cargo: ''
    };

    handleSumit = (e) => {
        e.preventDefault();

        const { nome, idade, endereco, cargo } = this.state;

        console.log('funcionou', nome, idade, endereco, cargo);
    };

    handleInputChange = (e, field) => {
        this.setState({
            [field]: e.target.value
        });
    };

    render() {
        const { nome, idade, endereco, cargo } = this.state;
        return (
            <section className="section-container">
                <div className="form-box">
                    <h2>Formulário</h2>
                    <form onSubmit={this.handleSumit} className="form-container">
                        <p>
                            <label>
                                Nome Cliente:
                                <input
                                    onChange={(e) => this.handleInputChange(e, 'nome')}
                                    type='text'
                                    placeholder='Nome'
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Idade Cliente:
                                <input
                                    onChange={(e) => this.handleInputChange(e, 'idade')}
                                    type='text'
                                    placeholder='Idade'
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Endereço Cliente:
                                <input
                                    onChange={(e) => this.handleInputChange(e, 'endereco')}
                                    type='text'
                                    placeholder='Endereço'
                                />
                            </label>
                        </p>
                        <p>
                            <label>
                                Cargo Cliente:
                                <input
                                    onChange={(e) => this.handleInputChange(e, 'cargo')}
                                    type='text'
                                    placeholder='Cargo'
                                />
                            </label>
                        </p>

                        <button type='submit'>Enviar</button>
                    </form>
                </div>

                <div className="info-box">
                    <h2>Informações</h2>
                    <h3>{nome}</h3>
                    <h3>{idade}</h3>
                    <h3>{endereco}</h3>
                    <h3>{cargo}</h3>
                </div>
            </section>
        );
    }
}

export default Form;
