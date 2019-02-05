const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MODEL_NAME = 'pessoas';

const _schema = {
  nome: {
    type: String,
    required: true
  },
  apelido: {
    type: String,
    required: true
  },
  data_nascimeto: {
    type: Date,
    required: true
  },
  endereco: [
    {
      titulo: {
        type: String,
        required: true
      },
      cep: {
        type: String,
        required: true
      },
      logradouro: {
        type: String,
        required: true
      },
      complemento: {
        type: String,
        required: true
      },
      bairro: {
        type: String,
        required: true
      },
      localidade: {
        type: String,
        required: true
      },
      uf: {
        type: String,
        required: true
      },
      unidade: {
        type: String,
        required: true
      },
      ibge: {
        type: Number,
        required: true
      },
      gia: {
        type: Number,
        required: true
      }
    }
  ],
  contato: [
    {
      tipo: {
        type: String,
        enum: [
          "Telefone",
          "E-mail",
          "Site",
          "Facebook",
          "Instagram",
          "Whatsapp"
        ]
      },
      informacao: {
        type: Number,
        required: true
      }
    }
  ],
  documento: [
    {
      tipo: {
        type: String,
        enum: ["CPF", "RG", "CNPJ", "IE", "SUFRAMA"]
      },
      informacao: {
        type: String,
        required: true
      }
    }
  ],
  crateAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  },
  roles: {
    type: [
      {
        type: String,
        enum: ["Administrador", "Cliente", "Funcionário", "Fornecedor"]
      }
    ],
    default: ["Cliente"]
  },
  status: {
    type: [
      {
        type: String,
        enum: ["ativo", "inativo", "aguardando", "deletado"]
      }
    ],
    default: ["ativo"]
  }
};

const Model = mongoose.model(MODEL_NAME, new Schema(_schema));

module.exports = Model;