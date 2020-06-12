//ethserver.js

import Web3 from "web3";


const web3 = new Web3(new Web3.providers.HttpProvider(""));
const abi = "";
const address = "";
const contract = "";

const account = () => {
  return new Promise((resolve, reject) => {
    web3.eth.getAccounts((err, accounts) => {
      if (err === null) {
        resolve(accounts[process.env.ACCOUNT_NUMBER]);
      } else {
        reject(err);
      }
    });
  });
};

export const createRequest = ({
  urlToQuery,
  attributeToFetch
}) => {
  return new Promise((resolve, reject) => {
    account().then(account => {
      contract.createRequest(urlToQuery, attributeToFetch, {
        from: account,
        gas: 60000000
      }, (err, res) => {
        if (err === null) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    }).catch(error => reject(error));
  });
};

export const updateRequest = ({
  id,
  valueRetrieved
}) => {
  return new Promise((resolve, reject) => {
    account().then(account => {
      contract.updateRequest(id, valueRetrieved, {
        from: account,
        gas: 60000000
      }, (err, res) => {
        if (err === null) {
          resolve(res);
        } else {
          reject(err);
        }
      });
    }).catch(error => reject(error));
  });
};

export const updateHCS = 

export const newRequest = (callback) => {
  contract.NewRequest((error, result) => callback(error, result));
};

export const updatedRequest = (callback) => {
  contract.UpdatedRequest((error, result) => callback(error, result));
};

export const updateHCS = (callback) => {
  contract.UpdateHCS((error, result) => callback(error, result));
};
