import React from 'react';
import Script from 'next/script'

const ScriptComponent = () => {
    return (
        <div>
            <script src="/js/jquery.js" ></script>
            <script src="/js/plugins.js" ></script>
            <script src="/js/plugins2.js"></script>
            <script src="/js/custom.js"  ></script>
        </div>
    );
};

export default ScriptComponent;