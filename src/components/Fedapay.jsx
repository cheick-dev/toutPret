import React, { useEffect } from 'react';
// import { FedaCheckoutButton, FedaCheckoutContainer } from 'fedapay-reactjs';

const FedaPay = () => {
    const PUBLIC_KEY = 'pk_sandbox_XXXXXX';

    const checkoutButtonOptions = {
        public_key: PUBLIC_KEY,
        transaction: {
            amount: 100,
            description: 'Airtime'
        },
        currency: {
            iso: 'XOF'
        },
        button: {
            class: 'btn btn-primary',
            text: 'Payer 100 FCFA'
        },
        onComplete(resp) {
            const FedaPay = window['FedaPay'];
            if (resp.reason === FedaPay.DIALOG_DISMISSED) {
                alert('Vous avez fermé la boite de dialogue');
            } else {
                alert('Transaction terminée: ' + resp.reason);
            }

            console.log(resp.transaction);
        }
    };

    const checkoutEmbedOptions = {
        public_key: PUBLIC_KEY,
        transaction: {
            amount: 100,
            description: 'Airtime'
        },
        currency: {
            iso: 'XOF'
        }
    };

    useEffect(() => {
        // Ajoutez du code ici si vous avez besoin d'effets secondaires lors du montage du composant
        return () => {
            // Ajoutez du code ici si vous avez besoin d'effets secondaires lors du démontage du composant
        };
    }, []);

    return (
        <div>
            <FedaCheckoutButton options={checkoutButtonOptions} />
            <FedaCheckoutContainer
                options={checkoutEmbedOptions}
                style={{ height: 500, width: 500, backgroundColor: '#eee' }}
            />
        </div>
    );
};

export default FedaPay;
