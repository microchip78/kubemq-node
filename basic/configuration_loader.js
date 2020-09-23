/* MIT License

Copyright (c) 2018 KubeMQ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

var _path = null
var _key = null
var _cert = null

function get_server_address() {
    if (_path != null) {
        return _path
    }
    _path = process.env.KubeMQServerAddress
    return _path
}


function get_registration_key() {
    if (_key != null) {
        return _key
    }
    _key = process.env.KubeMQRegistrationKey
    return _key

}

function get_certificate_file() {
    if (_cert != null) {
        return _cert
    }
    _cert = process.env.KubeMQCertificateFile
    return _cert
}

module.exports = {
    get_server_address: get_server_address,
    get_registration_key: get_registration_key,
    get_certificate_file: get_certificate_file
};